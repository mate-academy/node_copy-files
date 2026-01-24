'use strict';

const { readFileSync, writeFileSync, existsSync, statSync } = require('fs');
const path = require('path');

const [, , src, dest] = process.argv;

if (!src || !dest) {
  throw new Error('Two arguments required');
}

const fullSrc = path.resolve(process.cwd(), src);
const fullDest = path.resolve(process.cwd(), dest);

if (!existsSync(fullSrc)) {
  throw new Error('Source is incorrect');
}

if (statSync(fullSrc).isDirectory()) {
  throw new Error('Source should be file not folder!');
}

const destDir = path.dirname(fullDest);

if (!existsSync(destDir)) {
  throw new Error('Destination is incorrect!');
}

if (existsSync(fullDest) && statSync(fullDest).isDirectory()) {
  throw new Error('Destination is a directory!');
}

const content = readFileSync(fullSrc, 'utf8');

writeFileSync(fullDest, content, 'utf8');

// eslint-disable-next-line no-console
console.log('The copy was succeeded!');
