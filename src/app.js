'use strict';

const fs = require('fs');

const [, , source, destination] = process.argv;

if (!source || !destination) {
  console.error('Error: Source and destination paths are required');
  process.exit(0);
}

if (source === destination) {
  process.exit(0);
}

if (!fs.existsSync(source)) {
  console.error('Error: Source file does not exist');
  process.exit(0);
}

const sourceStats = fs.statSync(source);

if (!sourceStats.isFile()) {
  console.error('Error: Source must be a file');
  process.exit(0);
}

if (fs.existsSync(destination)) {
  const destStats = fs.statSync(destination);

  if (!destStats.isFile()) {
    console.error('Error: Destination must be a file');
    process.exit(0);
  }
}

fs.copyFileSync(source, destination);
