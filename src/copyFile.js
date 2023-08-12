/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const { checkFileExists } = require('./checkFileExists');

const copyFile = async(sourcePath, destPath) => {
  const fileExists = await checkFileExists(destPath);

  if (sourcePath === destPath) {
    throw new Error(
      `Failed to copy file. Source and destination paths are the same.`
    );
  }

  if (fileExists) {
    throw new Error(
      'The file where the information should be copied already exists.'
    );
  }

  try {
    const data = await fs.promises.readFile(sourcePath, 'utf-8');

    await fs.promises.writeFile(destPath, data, 'utf-8');

    console.log(`File copied from ${sourcePath} to ${destPath}`);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { copyFile };
