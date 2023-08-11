/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copyFile = async(sourcePath, destPath) => {
  try {
    const data = await fs.promises.readFile(sourcePath, 'utf-8');

    await fs.promises.writeFile(destPath, data, 'utf-8');

    console.log(`File copied from ${sourcePath} to ${destPath}`);
  } catch (error) {
    console.error(`Failed to copy file: ${error.message}`);
    throw error;
  }
};

module.exports = { copyFile };
