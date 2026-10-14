import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const port = 4173;

const server = http.createServer((req, res) => {
  const requestPath = req.url === '/' ? '/index.html' : req.url;
  const safePath = requestPath.split('?')[0];
  const target = path.join(root, safePath.replace(/^\/+/, ''));

  if (!target.startsWith(root)) {
    res.writeHead(403).end('Forbidden');
    return;
  }

  try {
    const data = fs.readFileSync(target);
    const ext = path.extname(target);
    const type = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'text/javascript',
      '.svg': 'image/svg+xml',
      '.json': 'application/json'
    }[ext] || 'text/plain';

    res.writeHead(200, { 'Content-Type': type });
    res.end(data);
  } catch {
    res.writeHead(404).end('Not found');
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`EcoTwin demo running at http://127.0.0.1:${port}`);
});
