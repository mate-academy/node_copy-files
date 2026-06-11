/* eslint-disable no-console */
'use strict';

const fs = require('fs');

async function copy() {
  const params = process.argv.slice(2);

  if (params.length < 2) {
    console.error('Usage: node app.js <source> <destination>');

    return;
  }

  const [source, destination] = params;

  if (source === destination) {
    return;
  }

  if (!fs.existsSync(source)) {
    console.error(`Source file does not exist: ${source}`);

    return;
  }

  const sourceStat = fs.statSync(source);

  if (!sourceStat.isFile()) {
    console.error(`Source must be a file, not a directory: ${source}`);

    return;
  }

  if (fs.existsSync(destination) && fs.statSync(destination).isDirectory()) {
    console.error(`Destination must not be a directory: ${destination}`);

    return;
  }

  fs.copyFileSync(source, destination);
}

copy();
