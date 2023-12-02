/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');
const path = require('path');

const copyFile = async(source, destination) => {
  const sourcePath = path.resolve(__dirname, source);
  const destinationPath = path.resolve(__dirname, destination);

  if (sourcePath === destinationPath) {
    console.log('Copying to the same location is not allowed');

    return;
  }

  try {
    await fs.copyFile(sourcePath, destinationPath);
    console.log('File was copied successfully');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`Error: There is no such file: '${source}'`);
      throw error;
    }
  }
};

module.exports = {
  copyFile,
};
