'use strict';

const fs = require('fs').promises;
const path = require('path');

async function isDirectory(pathName) {
  try {
    const stats = await fs.stat(pathName);

    return stats.isDirectory();
  } catch (error) {
    throw new Error(
      `Error checking if ${pathName} is a directory: ${error.message}`
    );
  }
}

async function main() {
  const [sourceFile, destinationFile] = process.argv.slice(2);

  if (!sourceFile || !destinationFile) {
    throw new Error('Expected 2 arguments (sourceFile, destinationFile)');
  }

  if (sourceFile === destinationFile) {
    return;
  }

  const filePath = path.join(__dirname, sourceFile);
  const destinationPath = path.join(__dirname, destinationFile);

  try {
    const isSourceDirectory = await isDirectory(filePath);
    const isDestinationDirectory = await isDirectory(destinationPath);

    if (isSourceDirectory || isDestinationDirectory) {
      throw new Error('Arguments should be files, not directories');
    }

    await fs.copyFile(filePath, destinationPath);
  } catch (error) {
    throw new Error();
  }
}

main();
