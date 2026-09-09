'use strict';

const fs = require('fs').promises;
const path = require('path');

async function copyFiles(fileSource, fileDestination) {
  try {
    const fromPath = path.resolve(fileSource);
    const toPath = path.resolve(fileDestination);

    if (fromPath === toPath) {
      // eslint-disable-next-line no-console
      console.error('Source and destination paths are the same');

      return;
    }

    await fs.access(fromPath);

    await fs.copyFile(fromPath, toPath);
    // eslint-disable-next-line no-console
    console.log(`File copied from ${fromPath} to ${toPath}`);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error during file copy: ${error.message}`);
  }
}

async function main() {
  const args = process.argv.slice(2);
  const [sourcePath, destinationPath] = args;

  if (!sourcePath || !destinationPath) {
    // eslint-disable-next-line no-console
    console.error('One or both file paths are missing');

    return;
  }

  await copyFiles(sourcePath, destinationPath);
}

main();
