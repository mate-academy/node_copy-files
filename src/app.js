'use strict';
/* eslint-disable no-console */

const fsPromises = require('fs/promises');

const copyFile = async () => {
  try {
    const [sourceFile, newFileName] = process.argv.slice(2);

    if (!sourceFile || !newFileName) {
      throw new Error('You must provide source and destination paths.');
    }

    if (sourceFile === newFileName) {
      throw new Error('Source and destination paths are the same');
    }

    await fsPromises.copyFile(sourceFile, newFileName);
  } catch (error) {
    console.error(error.message);
  }
};

copyFile();
