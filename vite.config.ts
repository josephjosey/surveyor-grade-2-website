import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function persistencePlugin(): Plugin {
  const dataDir = path.resolve(__dirname, 'data');
  const dbPath = path.join(dataDir, 'database.json');
  const uploadsDir = path.resolve(__dirname, 'public/uploads');

  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  return {
    name: 'survey-academy-persistence',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const rawUrl = req.url || '';
        const parsedUrl = rawUrl.split('?')[0];

        // GET /api/database
        if (parsedUrl === '/api/database' && req.method === 'GET') {
          try {
            if (fs.existsSync(dbPath)) {
              const content = fs.readFileSync(dbPath, 'utf-8');
              res.setHeader('Content-Type', 'application/json');
              res.end(content);
              return;
            } else {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ empty: true }));
              return;
            }
          } catch (err: any) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: err.message }));
            return;
          }
        }

        // POST /api/database
        if (parsedUrl === '/api/database' && req.method === 'POST') {
          try {
            const chunks: Buffer[] = [];
            req.on('data', (chunk) => chunks.push(chunk));
            req.on('end', () => {
              try {
                const body = Buffer.concat(chunks).toString('utf-8');
                // Validate JSON
                JSON.parse(body);
                fs.writeFileSync(dbPath, body, 'utf-8');
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, timestamp: new Date().toISOString() }));
              } catch (parseErr: any) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Invalid JSON: ' + parseErr.message }));
              }
            });
            return;
          } catch (err: any) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: err.message }));
            return;
          }
        }

        // POST /api/upload
        if (parsedUrl === '/api/upload' && req.method === 'POST') {
          try {
            const chunks: Buffer[] = [];
            req.on('data', (chunk) => chunks.push(chunk));
            req.on('end', () => {
              try {
                const bodyStr = Buffer.concat(chunks).toString('utf-8');
                const { filename, base64Data } = JSON.parse(bodyStr);
                const safeName = Date.now() + '_' + (filename || 'document.pdf').replace(/[^a-zA-Z0-9.-]/g, '_');
                const filePath = path.join(uploadsDir, safeName);

                const base64Clean = base64Data.replace(/^data:[^;]+;base64,/, '');
                fs.writeFileSync(filePath, Buffer.from(base64Clean, 'base64'));

                res.setHeader('Content-Type', 'application/json');
                res.end(
                  JSON.stringify({
                    success: true,
                    fileUrl: `/uploads/${safeName}`,
                    fileName: safeName
                  })
                );
              } catch (e: any) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Failed to save file: ' + e.message }));
              }
            });
            return;
          } catch (err: any) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: err.message }));
            return;
          }
        }

        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), persistencePlugin()],
  server: {
    port: 3000,
    open: true
  }
});
