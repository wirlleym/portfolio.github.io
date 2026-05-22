const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(cmd, opts = {}) {
  console.log('>', cmd);
  return execSync(cmd, { stdio: 'inherit', ...opts });
}

function main() {
  const cwd = process.cwd();
  const clientDir = path.join(cwd, 'dist', 'client');
  const tmpDir = path.join(cwd, '.gh-pages-temp');
  const remote = process.env.REPO_REMOTE || 'https://github.com/wirlleym/portfolio.github.io.git';

  if (!fs.existsSync(clientDir)) {
    console.error('dist/client not found. Run `npm run build` first.');
    process.exit(1);
  }

  try {
    if (fs.existsSync(tmpDir)) {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    }
    fs.mkdirSync(tmpDir);
    // Node 16+ supports fs.cpSync
    if (fs.cpSync) {
      fs.cpSync(clientDir, tmpDir, { recursive: true });
    } else {
      // fallback copy
      run(`xcopy "${clientDir}" "${tmpDir}" /E /I /Y`);
    }

    run(`git init`, { cwd: tmpDir });
    run(`git checkout -b gh-pages`, { cwd: tmpDir });
    run(`git add .`, { cwd: tmpDir });
    run(`git commit -m "Deploy static site (manual)"`, { cwd: tmpDir });
    run(`git remote add origin ${remote}`, { cwd: tmpDir });
    run(`git push --force origin gh-pages`, { cwd: tmpDir });

    // cleanup
    fs.rmSync(tmpDir, { recursive: true, force: true });
    console.log('Manual deploy finished.');
  } catch (err) {
    console.error('Deploy failed:', err.message);
    process.exit(1);
  }
}

main();
