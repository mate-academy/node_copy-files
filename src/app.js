'use strict';

const fs = require('node:fs');

const [sourceFile, destinationFile] = process.argv.slice(2);

try {
  const content = fs.readFileSync(sourceFile, 'utf-8');

  fs.writeFileSync(destinationFile, content);
} catch (err) {
  if (err.code === 'ENOENT') {
    // eslint-disable-next-line no-console
    console.error('Source file does not exist');
  } else if (err.code === 'EISDIR') {
    // eslint-disable-next-line no-console
    console.error('Destination should be a file, not directory');
  } else {
    // eslint-disable-next-line no-console
    console.error(`Error: ${err.message}`);
  }
}
