/* eslint-disable no-console */
'use strict';

const fs = require('node:fs');

function copyFile(sourcePath, destinationPath) {
  if (!sourcePath || !destinationPath) {
    throw new Error('Please provide both source and destination file paths.');
  }

  if (sourcePath === destinationPath) {
    return;
  }

  const source = fs.readFileSync(sourcePath).toString();

  fs.writeFileSync(destinationPath, source);
}

if (require.main === module) {
  const [sourcePath, destinationPath] = process.argv.slice(2);

  try {
    copyFile(sourcePath, destinationPath);
  } catch (error) {
    if (error.code === 'EISDIR') {
      console.error(error.message);
    } else if (error.code === 'ENOENT') {
      console.error(error.message);
    } else {
      console.error(error.message);
    }
  }
}

module.exports = copyFile;
