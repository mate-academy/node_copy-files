/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [sourcePath, destinationPath] = process.argv.slice(2);

if (process.argv.length < 4) {
  console.error(
    'Error: Please provide both source and destination file paths.',
  );
  process.exit(0);
}

if (sourcePath === destinationPath) {
  process.exit(0);
}

if (!fs.existsSync(sourcePath)) {
  console.error("Your file doesn't exist");
  process.exit(0);
}

if (fs.statSync(sourcePath).isDirectory()) {
  console.error('Your file is directory, not file');
  process.exit(0);
}

if (
  fs.existsSync(destinationPath) &&
  fs.statSync(destinationPath).isDirectory()
) {
  console.error('Your destinationPath is directory, not file');
  process.exit(0);
}

fs.copyFileSync(sourcePath, destinationPath);
console.log('Great, you copied your file with success');
