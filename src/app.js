/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copyFile = async () => {
  const [sourceFile, destinationFile] = process.argv.slice(2);

  if (!sourceFile || !destinationFile) {
    console.error(
      '2 arguments are required: <sourceFile> and <destinationFile>',
    );

    return;
  }

  if (sourceFile === destinationFile) {
    console.error('Source and destination cannot be the same.');

    return;
  }

  try {
    await fs.promises.copyFile(sourceFile, destinationFile);
  } catch (error) {
    console.error(`Error copying file: ${error.message}`);
  }
};

copyFile();

module.exports = copyFile;
