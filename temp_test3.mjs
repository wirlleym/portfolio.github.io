import path from "node:path";
const modulePath = path.resolve('dist/server/index.js');
const mod = await import('file://' + modulePath.replace(/\\/g, '/'));
const response = await mod.default.fetch(new Request('https://example.com/portfolio/'));
const body = await response.text();
console.log(body.slice(0,1800));
