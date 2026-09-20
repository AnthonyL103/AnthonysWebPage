// Approximate GitHub language-dot colors for common technologies, with a
// deterministic hashed fallback so any unlisted tag still gets a stable,
// on-theme color instead of looking unstyled.
const KNOWN: Record<string, string> = {
  python: '#f5d76e', typescript: '#3ea6ff', javascript: '#f1e05a', go: '#38bdf8',
  java: '#f89820', 'c++': '#f472b6', c: '#a8b1bb', ruby: '#f87171', sql: '#67e0a3',
  react: '#61dafb', 'next.js': '#e8e8e8', 'node.js': '#67e0a3', express: '#a8b1bb',
  'tailwind css': '#38bdf8', tailwindcss: '#38bdf8', 'framer motion': '#f472b6',
  postgresql: '#3ea6ff', mysql: '#f5a623', firebase: '#f5a623', aws: '#f5a623',
  'aws s3': '#f5a623', terraform: '#a78bfa', cloudwatch: '#a78bfa', docker: '#3ea6ff',
  nginx: '#67e0a3', pm2: '#a8b1bb', fastapi: '#67e0a3', websockets: '#f472b6',
  'model context protocol': '#a78bfa', 'anthropic claude api': '#f5a623',
  'openai api': '#67e0a3', 'google gemini ai': '#3ea6ff', stripe: '#a78bfa',
}

const PALETTE = ['#3ddc84', '#38bdf8', '#f472b6', '#fbbf24', '#a78bfa', '#67e0a3', '#f87171', '#f5a623']

export function techColor(name: string): string {
  const key = name.toLowerCase()
  if (KNOWN[key]) return KNOWN[key]
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) >>> 0
  return PALETTE[hash % PALETTE.length]
}
