/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function main() {
  const [source, destination] = process.argv.slice(2);

  if (!source || !destination) {
    console.error('Usage: node src/app.js <source> <destination>');

    return;
  }

  try {
    const sourceStats = fs.statSync(source);

    if (!sourceStats.isFile()) {
      throw new Error(`Source is not a file: ${source}`);
    }

    if (path.resolve(source) === path.resolve(destination)) {
      return;
    }

    if (fs.existsSync(destination) && fs.statSync(destination).isDirectory()) {
      throw new Error(`Destination is a directory: ${destination}`);
    }

    fs.copyFileSync(source, destination);
  } catch (error) {
    console.error(error.message);
  }
}

main();
