/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');
const path = require('path');

async function copyFile() {
  const [source, destination] = process.argv.slice(2);

  if (!source || !destination) {
    console.error('Error: You must specify both source and destination paths.');

    return;
  }

  const sourcePath = path.resolve(source);
  const destinationPath = path.resolve(destination);

  if (sourcePath === destinationPath) {
    console.error('Error: Source and destination paths are the same.');

    return;
  }

  try {
    await fs.copyFile(sourcePath, destinationPath);
    console.log(`File copied from ${source} to ${destination}`);
  } catch (error) {
    console.error(`Error copying file: ${error.message}`);
  }
}

copyFile();
