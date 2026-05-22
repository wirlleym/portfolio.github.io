const fs = require('fs');
const path = require('path');

function createIndex() {
  const clientDir = path.join(__dirname, '..', 'dist', 'client');
  const assetsDir = path.join(clientDir, 'assets');
  if (!fs.existsSync(clientDir)) {
    console.error('dist/client not found — run build first');
    process.exit(1);
  }

  let cssFile = null;
  let jsEntry = null;

  if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);
    const cssCandidates = files.filter((f) => /^styles-.*\.css$/.test(f));
    const jsCandidates = files.filter((f) => /^index-.*\.js$/.test(f));

    if (cssCandidates.length) cssFile = cssCandidates[0];

    if (jsCandidates.length) {
      // pick the longest filename (likely the main bundle)
      jsCandidates.sort((a, b) => b.length - a.length);
      jsEntry = jsCandidates[0];
    }
  }

  const indexHtml = `<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Wirlley Melo</title>
    <link rel="icon" href="./favicon.ico" />
    ${cssFile ? `<link rel="stylesheet" href="./assets/${cssFile}" />` : ''}
  </head>
  <body>
    <div id="root"></div>
    ${jsEntry ? `<script type="module" src="./assets/${jsEntry}"></script>` : ''}
  </body>
</html>`;

  fs.writeFileSync(path.join(clientDir, 'index.html'), indexHtml, 'utf8');
  console.log('Created dist/client/index.html');
}

createIndex();
