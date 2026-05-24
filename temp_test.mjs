import path from "node:path";
const modulePath = path.resolve('dist/server/index.js');
const mod = await import('file://' + modulePath.replace(/\\/g, '/'));
console.log('default exported', typeof mod.default);
if (mod.default && typeof mod.default.fetch === 'function') {
  const response = await mod.default.fetch(new Request('https://example.com/'));
  console.log('status', response.status);
  console.log('headers', [...response.headers.entries()]);
  const body = await response.text();
  console.log('body starts', body.slice(0,300));
} else {
  console.error('no fetch method');
}
