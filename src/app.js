'use strict';

const fs = require('node:fs');
const path = require('node:path');

function main() {
  const [, , source, destination] = process.argv;

  try {
    const sourcePath = path.resolve(source);
    const destPath = path.resolve(destination);

    if (sourcePath === destPath) {
      return;
    }

    const stats = fs.statSync(sourcePath);

    if (!stats.isFile()) {
      throw new Error('Source is not a file');
    }

    fs.copyFileSync(sourcePath, destPath);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error.message);
  }
}

main();
