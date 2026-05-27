#!/usr/bin/env bun

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const envPath = join(root, '.env');
const outDir = join(root, 'tmp', 'api-tests');

function loadEnv(path) {
  if (!existsSync(path)) return {};
  const env = {};
  for (const raw of readFileSync(path, 'utf8').split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#') || !line.includes('=')) continue;
    const [key, ...rest] = line.split('=');
    env[key.trim()] = rest.join('=').trim().replace(/^['"]|['"]$/g, '');
  }
  return env;
}

function mask(value) {
  if (!value) return '<vazio>';
  return `${value.slice(0, 4)}…${value.slice(-4)} (${value.length})`;
}

async function requestJson(url, options = {}) {
  const res = await fetch(url, options);
  const text = await res.text();
  let json = null;
  try { json = JSON.parse(text); } catch {}
  return { ok: res.ok, status: res.status, statusText: res.statusText, json, text };
}

async function testGeminiApiKey(apiKey) {
  console.log('\n== gemini api key ==');
  console.log(`key: ${mask(apiKey)}`);
  if (!apiKey) {
    console.log('status: pulado — GOOGLE_API_KEY ausente');
    return false;
  }

  const list = await requestJson(`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(apiKey)}`);
  console.log(`models.list: ${list.status} ${list.statusText}`);
  if (!list.ok) {
    console.log(`erro: ${list.json?.error?.message || list.text.slice(0, 300)}`);
    return false;
  }

  const models = list.json?.models || [];
  const imageCandidates = models
    .map((m) => m.name?.replace('models/', ''))
    .filter(Boolean)
    .filter((name) => /image|imagen|flash.*image|nano/i.test(name));

  console.log(`modelos disponíveis: ${models.length}`);
  console.log(`candidatos imagem: ${imageCandidates.join(', ') || 'nenhum candidato explícito'}`);

  const candidateOrder = [
    'gemini-2.5-flash-image-preview',
    'gemini-2.0-flash-preview-image-generation',
    'imagen-4.0-generate-preview-06-06',
    'imagen-3.0-generate-002',
    ...imageCandidates,
  ];
  const seen = new Set();
  const candidates = candidateOrder.filter((m) => m && !seen.has(m) && seen.add(m));

  mkdirSync(outDir, { recursive: true });
  for (const model of candidates) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
    const body = {
      contents: [{
        parts: [{ text: 'gere uma imagem quadrada simples de uma folha verde e uma vela dourada, sem texto, estilo fotografia de produto.' }],
      }],
      generationConfig: { responseModalities: ['TEXT', 'IMAGE'] },
    };
    const gen = await requestJson(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    console.log(`generateContent ${model}: ${gen.status} ${gen.statusText}`);
    if (!gen.ok) {
      const msg = gen.json?.error?.message || gen.text.slice(0, 220);
      console.log(`  erro: ${msg}`);
      continue;
    }

    const parts = gen.json?.candidates?.[0]?.content?.parts || [];
    const imagePart = parts.find((p) => p.inlineData?.data || p.inline_data?.data);
    if (!imagePart) {
      console.log('  sem imagem inline na resposta');
      continue;
    }
    const inline = imagePart.inlineData || imagePart.inline_data;
    const mime = inline.mimeType || inline.mime_type || 'image/png';
    const ext = mime.includes('jpeg') || mime.includes('jpg') ? 'jpg' : 'png';
    const file = join(outDir, `gemini-${model.replace(/[^a-z0-9._-]/gi, '-')}.${ext}`);
    writeFileSync(file, Buffer.from(inline.data, 'base64'));
    console.log(`  imagem gerada: ${file}`);
    return true;
  }

  return false;
}

async function testVertexKey(env) {
  console.log('\n== vertex/gcp ==');
  const key = env.GOOGLE_VERTEX_AI_KEY;
  const project = env.GOOGLE_CLOUD_PROJECT_ID;
  const location = env.GOOGLE_CLOUD_LOCATION || 'us-central1';
  console.log(`key: ${mask(key)}`);
  console.log(`project: ${project || '<vazio>'}`);
  console.log(`location: ${location}`);

  if (!key) {
    console.log('status: pulado — GOOGLE_VERTEX_AI_KEY ausente');
    return false;
  }
  if (!project) {
    console.log('status: pulado — GOOGLE_CLOUD_PROJECT_ID ausente; vertex ai precisa do project id e normalmente oauth/adc, não só api key.');
    return false;
  }

  const url = `https://${location}-aiplatform.googleapis.com/v1/projects/${encodeURIComponent(project)}/locations/${encodeURIComponent(location)}/publishers/google/models/imagen-3.0-generate-002:predict?key=${encodeURIComponent(key)}`;
  const body = {
    instances: [{ prompt: 'folha verde e vela dourada, fotografia de produto, sem texto' }],
    parameters: { sampleCount: 1, aspectRatio: '1:1' },
  };
  const res = await requestJson(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  console.log(`imagen predict: ${res.status} ${res.statusText}`);
  if (!res.ok) {
    console.log(`erro: ${res.json?.error?.message || res.text.slice(0, 300)}`);
    return false;
  }
  const b64 = res.json?.predictions?.[0]?.bytesBase64Encoded || res.json?.predictions?.[0]?.image?.bytesBase64Encoded;
  if (!b64) {
    console.log('sem bytes de imagem na resposta');
    return false;
  }
  mkdirSync(outDir, { recursive: true });
  const file = join(outDir, 'vertex-imagen-test.png');
  writeFileSync(file, Buffer.from(b64, 'base64'));
  console.log(`imagem gerada: ${file}`);
  return true;
}

const env = { ...loadEnv(envPath), ...process.env };
console.log('testador seguro de apis google de imagem');
console.log(`env: ${envPath}`);

const geminiOk = await testGeminiApiKey(env.GOOGLE_API_KEY);
const vertexOk = await testVertexKey(env);

console.log('\n== resumo ==');
console.log(`gemini_api_image_generation=${geminiOk ? 'ok' : 'falhou_ou_pendente'}`);
console.log(`vertex_imagen_generation=${vertexOk ? 'ok' : 'falhou_ou_pendente'}`);

process.exit(geminiOk || vertexOk ? 0 : 1);
