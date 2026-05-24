const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

async function createIndex() {
  const clientDir = path.join(__dirname, '..', 'dist', 'client');
  const serverEntry = path.join(__dirname, '..', 'dist', 'server', 'index.js');

  if (!fs.existsSync(clientDir)) {
    console.error('dist/client not found — run build first');
    process.exit(1);
  }

  if (!fs.existsSync(serverEntry)) {
    console.error('dist/server/index.js not found — run build first');
    process.exit(1);
  }

  const serverModule = await import(pathToFileURL(serverEntry).href);
  const serverWorker = serverModule.default;

  if (!serverWorker || typeof serverWorker.fetch !== 'function') {
    console.error('Built server entry does not export a fetch handler');
    process.exit(1);
  }

  const requestUrl = 'https://example.com/portfolio/';
  let response = await serverWorker.fetch(new Request(requestUrl));

  if (response.status >= 300 && response.status < 400) {
    const location = response.headers.get('location');
    if (location) {
      response = await serverWorker.fetch(new Request(location, requestUrl));
    }
  }

  if (response.status !== 200) {
    console.error(`Server-rendered HTML request failed with status ${response.status}`);
    const text = await response.text();
    console.error(text.slice(0, 1000));
    process.exit(1);
  }

  const html = await response.text();
  fs.writeFileSync(path.join(clientDir, 'index.html'), html, 'utf8');
  console.log('Created dist/client/index.html');
}

createIndex().catch((error) => {
  console.error(error);
  process.exit(1);
});
