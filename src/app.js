'use strict';

const fs = require('fs');

const args = process.argv.slice(2);
const [sourcePath, destinationPath] = args;

if (sourcePath !== destinationPath) {
  try {
    const data = fs.readFileSync(sourcePath, 'utf-8');

    fs.writeFileSync(destinationPath, data, 'utf-8');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
}
