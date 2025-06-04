/* eslint-disable no-console */
'use strict';

const fs = require('node:fs');
const args = process.argv.slice(2);
const [sourcePath, destinationPath] = args;

try {
  const source = fs.readFileSync(sourcePath);
  const content = source.toString();

  fs.writeFileSync(destinationPath, content);
} catch (e) {
  console.error(e);
}
