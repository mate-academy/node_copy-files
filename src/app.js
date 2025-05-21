/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFile() {
  const args = process.argv.slice(2);

  if (args.length !== 2) {
    console.error('Error: Please provide source and destination file paths');

    return;
  }

  const [sourcePath, destinationPath] = args;

  if (sourcePath === destinationPath) {
    console.error('Error: Source and destination paths are the same');

    return;
  }

  try {
    fs.copyFileSync(sourcePath, destinationPath);
    console.log(`File copied from ${sourcePath} to ${destinationPath}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

copyFile();
