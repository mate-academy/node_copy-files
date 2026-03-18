/* eslint-disable no-console  */
'use strict';

const fs = require('node:fs');
const path = require('node:path');

const args = process.argv.slice(2);
const source = args[0];
const dest = args[1];

if (!source || !dest) {
  console.error('Usage: node app.js <source> <destination>');

  process.exit(0);
}

if (path.resolve(source) === path.resolve(dest)) {
  process.exit(0);
}

if (!fs.existsSync(source)) {
  console.error('Source file does not exist');

  process.exit(0);
}

const sourceStat = fs.statSync(source);

if (!sourceStat.isFile()) {
  console.error('Source is not a file');

  process.exit(0);
}

if (fs.existsSync(dest)) {
  const destStat = fs.statSync(dest);

  if (destStat.isDirectory()) {
    console.error('Destination is a directory');
    process.exit(0);
  }
}

fs.copyFileSync(source, dest);
