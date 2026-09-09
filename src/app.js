/* eslint-disable no-console */
'use strict';

const fs = require('fs').promises;
const path = require('path');

async function copyFileWithValidation(sourcePath, destinationPath) {
  try {
    const fromPath = path.resolve(sourcePath);
    const toPath = path.resolve(destinationPath);

    if (fromPath === toPath) {
      console.error('Source and destination paths are the same');

      return;
    }

    await fs.access(fromPath);

    await fs.copyFile(fromPath, toPath);
    console.log(`File copied from ${fromPath} to ${toPath}`);
  } catch (error) {
    console.error(`Error during file copy: ${error.message}`);
  }
}

async function main() {
  const args = process.argv.slice(2);
  const [sourcePath, destinationPath] = args;

  if (!sourcePath || !destinationPath) {
    console.error('One or both file paths are missing');

    return;
  }

  await copyFileWithValidation(sourcePath, destinationPath);
}

main();
