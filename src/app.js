'use strict';
/*eslint-disable*/
const fs = require('fs');
const path = require('path');

function copyFiles(sourceFile, destinationFile) {
  if (!sourceFile || !destinationFile) {
    console.error('Error: Source and destination files must be specified.');
    return;
  }

  try {
    const sourcePath = path.resolve(sourceFile);
    const destinationPath = path.resolve(destinationFile);

    if (sourcePath === destinationPath) {
      console.log('Source and destination paths are the same');
      return;
    }

    if (!fs.existsSync(sourcePath)) {
      console.error(`Error: Source file "${sourcePath}" does not exist.`);
      return;
    }

    if (fs.lstatSync(sourcePath).isDirectory()) {
      console.error(
        `Error: Source path "${sourcePath}" is a directory, not a file.`,
      );
      return;
    }

    if (
      fs.existsSync(destinationPath) &&
      fs.lstatSync(destinationPath).isDirectory()
    ) {
      console.error(
        `Error: Destination path "${destinationPath}" is a directory.`,
      );
      return;
    }

    fs.copyFileSync(sourcePath, destinationPath);
    console.log(
      `File copied successfully from "${sourcePath}" to "${destinationPath}".`,
    );
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

function main() {
  const [sourceFile, destinationFile] = process.argv.slice(2);
  copyFiles(sourceFile, destinationFile);
}

main();

module.exports = { main };
