/* eslint-disable no-console */
'use strict';

const fs = require('node:fs');

const [sourcePath, destinationPath] = process.argv.slice(2);

try {
  const source = fs.readFileSync(sourcePath).toString();

  fs.writeFileSync(destinationPath, source);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
