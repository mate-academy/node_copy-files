/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const source = process.argv[2];
const dest = process.argv[3];

if (!source) {
  console.error('Please provide correct source path');
  process.exit(0);
}

if (!dest) {
  console.error('Please provide correct destination path');
  process.exit(0);
}

if (source === dest) {
  process.exit(0);
}

try {
  const stats = fs.statSync(source);

  if (!stats.isFile()) {
    console.error('Source path is not a file');
    process.exit(0);
  }

  if (fs.existsSync(dest)) {
    const destStats = fs.statSync(dest);

    if (destStats.isDirectory()) {
      console.error('Destination path is a directory');
      process.exit(0);
    }
  }

  const data = fs.readFileSync(source);

  fs.writeFileSync(dest, data);

  console.log(`File copied from "${source}" to "${dest}" path successfully`);
} catch (err) {
  console.error(err.message);
  process.exit(0);
}
