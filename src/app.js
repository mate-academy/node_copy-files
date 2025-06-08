/* eslint-disable no-console */
'use strict';

const fs = require('node:fs');

function copyFile() {
  const [sourcePath, destinationPath] = process.argv.slice(2);

  if (!sourcePath || !destinationPath) {
    console.error('Error: Please provide source and destination file paths');

    return;
  }

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
