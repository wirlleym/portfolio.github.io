import path from "node:path";
const modulePath = path.resolve('dist/server/index.js');
const mod = await import('file://' + modulePath.replace(/\\/g, '/'));
const response = await mod.default.fetch(new Request('https://example.com/portfolio/'));
console.log('status', response.status);
console.log('headers', [...response.headers.entries()]);
const body = await response.text();
console.log('body starts', body.slice(0,500));
