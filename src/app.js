'use strict';

const fs = require('fs');
const path = require('path');

async function isDirectory(pathName) {
  try {
    const stats = await fs.stat(pathName);

    return stats.isDirectory();
  } catch (error) {
    throw new
    Error(`Error checking if ${pathName} is a directory: ${error.message}`);
  }
}

async function main() {
  const [sourceFile, destinationFile] = process.argv.slice(2);

  if (!sourceFile || !destinationFile) {
    throw new Error('Expected 2 agruments (sourceFile, destinationFile)');
  }

  if (sourceFile === destinationFile) {
    return;
  }

  const filePath = path.join(__dirname, sourceFile);
  const destinationPath = path.join(__dirname, destinationFile);

  if (!filePath || !destinationPath) {
    throw new Error('One of files doesnt exist');
  }

  if (await isDirectory(filePath) || await isDirectory(destinationPath)) {
    throw new Error('Arguments should be files, not directories');
  }

  const fileData = await fs.readFile(sourceFile, 'utf8');

  await fs.writeFile(destinationFile, fileData, 'utf8');
}

main();
