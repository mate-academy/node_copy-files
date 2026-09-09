'use strict';

const fs = require('fs');
const path = require('path');

function copyFile() {
  const [, , source, destination] = process.argv;

  try {
    if (!source || !destination) {
      throw new Error('Source and destination are required');
    }

    const sourcePath = path.resolve(source);
    const destinationPath = path.resolve(destination);

    if (sourcePath === destinationPath) {
      return;
    }

    const sourceStatus = fs.statSync(sourcePath);

    if (!sourceStatus.isFile()) {
      throw new Error('Source must be a file');
    }

    if (fs.existsSync(destinationPath)) {
      const destinationStats = fs.statSync(destinationPath);

      if (!destinationStats.isFile()) {
        throw new Error('Destination must be a file');
      }
    }

    fs.copyFileSync(sourcePath, destinationPath);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error.message);
  }
}

copyFile();
