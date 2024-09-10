'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(source, destination) {
  try {
    // Resolve the absolute paths of both source and destination
    const sourcePath = path.resolve(source);
    const destinationPath = path.resolve(destination);

    // Check if source and destination paths are the same
    if (sourcePath === destinationPath) {
      console.error(
        'Error: Source and destination paths are the same. Cannot copy.',
      );

      return;
    }

    // Check if the source file exists
    if (!fs.existsSync(sourcePath)) {
      console.error(`Error: Source file "${source}" does not exist.`);

      return;
    }

    // Check if the source is a file and not a directory
    const stats = fs.statSync(sourcePath);

    if (!stats.isFile()) {
      console.error('Error: Only file copying is supported.');

      return;
    }

    // Perform the file copy
    fs.copyFileSync(sourcePath, destinationPath);

    console.log(
      `File copied successfully from ${sourcePath} to ${destinationPath}`,
    );
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

// Main function to read command line arguments
function main() {
  const args = process.argv.slice(2); // Remove the first two default args

  if (args.length !== 2) {
    console.error('Usage: node app.js <source_file> <destination_file>');

    return;
  }

  const sourceFile = args[0];
  const destinationFile = args[1];

  copyFile(sourceFile, destinationFile);
}

main();
