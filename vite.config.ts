import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { defineConfig, type Plugin } from 'vite';

const ROOT_DIR = __dirname;
const ASSETS_DIR = path.join(ROOT_DIR, 'assets');

function serveRootPwaFiles(): Plugin {
  const mimeMap: Record<string, string> = {
    '.webmanifest': 'application/manifest+json; charset=utf-8',
    '.png': 'image/png',
    '.js': 'application/javascript; charset=utf-8'
  };
  return {
    name: 'padel-dev-pwa-files',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const clean = (req.url || '/').split('?')[0];
        if (clean === '/manifest.webmanifest' || clean === '/sw.js' || clean.startsWith('/icons/')) {
          const target = path.join(ROOT_DIR, clean.replace(/^\/+/, ''));
          if (target.startsWith(ROOT_DIR) && fs.existsSync(target) && fs.statSync(target).isFile()) {
            const ext = path.extname(target).toLowerCase();
            res.setHeader('Content-Type', mimeMap[ext] || 'application/octet-stream');
            fs.createReadStream(target).pipe(res);
            return;
          }
        }
        next();
      });
    }
  };
}

function cleanStaleBuiltAssetsAndGenerateSw(): Plugin {
  return {
    name: 'padel-build-assets-and-sw',
    apply: 'build',
    buildStart() {
      if (!fs.existsSync(ASSETS_DIR)) return;
      for (const entry of fs.readdirSync(ASSETS_DIR)) {
        if (/^(index|main)-[A-Za-z0-9_-]+\.(js|css)$/.test(entry)) {
          fs.rmSync(path.join(ASSETS_DIR, entry), { force: true });
        }
      }
    },
    closeBundle() {
      const swTplPath = path.join(ROOT_DIR, 'src', 'sw.template.js');
      if (!fs.existsSync(swTplPath)) return;

      const coreAssets = [
        './',
        './index.html',
        './manifest.webmanifest',
        './icons/icon-192.png',
        './icons/icon-512.png',
        './icons/icon-maskable-512.png',
        './icons/apple-touch-icon.png'
      ];

      if (fs.existsSync(ASSETS_DIR)) {
        const assetFiles = fs.readdirSync(ASSETS_DIR).sort();
        for (const f of assetFiles) {
          if (/\.(js|css|webp|png|svg)$/i.test(f)) {
            coreAssets.push(`./assets/${f}`);
          }
        }
      }

      const hash = crypto.createHash('sha256');
      for (const rel of ['./index.html', ...coreAssets.filter(a => a.startsWith('./assets/'))]) {
        const p = path.join(ROOT_DIR, rel.replace(/^\.\//, ''));
        if (fs.existsSync(p)) hash.update(fs.readFileSync(p));
      }
      const versionTag = 'padel-se-' + hash.digest('hex').slice(0, 10);

      let swCode = fs.readFileSync(swTplPath, 'utf8');
      swCode = swCode
        .replace('__PADEL_APP_VERSION__', versionTag)
        .replace('/* __PADEL_CORE_ASSETS__ */', JSON.stringify(coreAssets, null, 2));

      fs.writeFileSync(path.join(ROOT_DIR, 'sw.js'), swCode, 'utf8');
    }
  };
}

export default defineConfig({
  root: 'src',
  base: './',
  publicDir: 'public',
  plugins: [serveRootPwaFiles(), cleanStaleBuiltAssetsAndGenerateSw()],
  build: {
    outDir: '..',
    emptyOutDir: false,
    assetsDir: 'assets',
    sourcemap: false
  }
});
