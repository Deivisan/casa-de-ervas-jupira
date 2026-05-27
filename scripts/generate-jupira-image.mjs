#!/usr/bin/env bun

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();

function loadEnv() {
  const path = join(root, '.env');
  const env = { ...process.env };
  if (!existsSync(path)) return env;
  for (const raw of readFileSync(path, 'utf8').split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#') || !line.includes('=')) continue;
    const [key, ...rest] = line.split('=');
    if (!env[key]) env[key] = rest.join('=').trim().replace(/^['"]|['"]$/g, '');
  }
  return env;
}

function arg(name, fallback = '') {
  const index = process.argv.indexOf(`--${name}`);
  if (index === -1) return fallback;
  return process.argv[index + 1] || fallback;
}

function flag(name) {
  return process.argv.includes(`--${name}`);
}

function buildPrompt({ product, format, style }) {
  return [
    `A high-resolution ${format} commercial product image for the Brazilian spiritual herb shop "Casa de Ervas Jupira".`,
    `Main subject: ${product}.`,
    'Composition: product centered and clearly visible, natural straw or red ritual cloth base, Brazilian green herbs around it, clay bowl details, subtle sacred smoke, clean negative space for social media design.',
    'Lighting: warm golden hour, soft shadows, premium product photography, high detail, macro lens feeling when appropriate.',
    'Brand colors: deep forest green, golden yellow, red accents, subtle anil blue, natural straw texture.',
    `Style: ${style}.`,
    'Mood: respectful, ancestral, firm, poetic, Brazilian afro-indigenous herbal shop identity.',
    'Do not include readable text, no logo, no watermark, no medical claims, no halloween aesthetic, no generic European witchcraft symbols.',
  ].join(' ');
}

async function main() {
  const env = loadEnv();
  const apiKey = env.GOOGLE_API_KEY || env.GEMINI_API_KEY || env.GOOGLE_VERTEX_AI_KEY;
  if (!apiKey) {
    console.error('erro: defina GOOGLE_API_KEY ou GOOGLE_VERTEX_AI_KEY no .env local. não commite o .env.');
    process.exit(1);
  }

  const product = arg('product', 'arruda, guiné and a golden candle');
  const aspectRatio = arg('aspect', '4:5');
  const sampleCount = Number(arg('count', '1')) || 1;
  const model = arg('model', env.GOOGLE_IMAGE_MODEL || 'imagen-4.0-generate-001');
  const outputDir = arg('out', join(root, 'tmp', 'generated-images'));
  const style = arg('style', 'elegant spiritual Brazilian product photography, clean instagram-ready composition');
  const prompt = arg('prompt', buildPrompt({ product, format: aspectRatio, style }));

  mkdirSync(outputDir, { recursive: true });

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:predict`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': apiKey,
    },
    body: JSON.stringify({
      instances: [{ prompt }],
      parameters: {
        sampleCount: Math.max(1, Math.min(4, sampleCount)),
        aspectRatio,
        personGeneration: flag('people') ? 'allow_adult' : 'dont_allow',
      },
    }),
  });

  const text = await response.text();
  let json = null;
  try { json = JSON.parse(text); } catch {}

  if (!response.ok) {
    console.error(`erro api: ${response.status} ${response.statusText}`);
    console.error(json?.error?.message || text.slice(0, 1000));
    process.exit(1);
  }

  const predictions = json?.predictions || [];
  if (!predictions.length) {
    console.error('erro: resposta sem predictions.');
    process.exit(1);
  }

  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const slug = product.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60) || 'jupira';

  const files = [];
  predictions.forEach((prediction, index) => {
    const b64 = prediction.bytesBase64Encoded || prediction.image?.bytesBase64Encoded;
    if (!b64) return;
    const file = join(outputDir, `${stamp}-${slug}-${index + 1}.png`);
    writeFileSync(file, Buffer.from(b64, 'base64'));
    files.push(file);
  });

  if (!files.length) {
    console.error('erro: nenhuma imagem base64 encontrada na resposta.');
    process.exit(1);
  }

  const promptFile = join(outputDir, `${stamp}-${slug}-prompt.txt`);
  writeFileSync(promptFile, prompt);

  console.log('geração concluída ✅');
  console.log(`modelo: ${model}`);
  console.log(`aspect: ${aspectRatio}`);
  console.log(`prompt: ${promptFile}`);
  for (const file of files) console.log(`imagem: ${file}`);
}

main().catch((error) => {
  console.error(error?.message || error);
  process.exit(1);
});
