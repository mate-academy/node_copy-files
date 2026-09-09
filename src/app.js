/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [source, destination] = process.argv.slice(2);

if (!source || !destination) {
  console.error('Wrong arguments');
  process.exit(0);
}

if (source === destination) {
  process.exit(0);
}

if (!fs.existsSync(source)) {
  console.error(`Source file '${source}' does not exist`);
  process.exit(0);
}

const sourceStats = fs.statSync(source);

if (sourceStats.isDirectory()) {
  console.error(`Source '${source}' is a directory, not a file`);
  process.exit(0);
}
// check if destination is a directory

if (fs.existsSync(destination)) {
  const destStats = fs.statSync(destination);

  if (destStats.isDirectory()) {
    console.error(`Destination '${destination}' is a directory, not a file`);
    process.exit(0);
  }
}

fs.copyFileSync(source, destination);
