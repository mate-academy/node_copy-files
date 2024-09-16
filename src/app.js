'use strict';

const fs = require('fs/promises');
const path = require('path');

const [source, dest] = process.argv.slice(2);

const copyFile = async(sourcePath, destPath) => {
  if (sourcePath === destPath) {
    throw new Error('Source path and destionation path are the same');
  }

  try {
    const basePath = path.join(__dirname, sourcePath);

    await fs.copyFile(basePath, destPath);
  } catch (error) {
    throw new Error('Can\'t copy a file', error);
  }
};

copyFile(source, dest);
