/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFile() {
  const args = process.argv.slice(2);
  const pathToCopyFile = args[0];
  const pathToInsertFile = args[1];

  if (pathToCopyFile === pathToInsertFile) {
    console.log('Source and destination paths are the same. No action taken.');

    return;
  }

  try {
    fs.cpSync(pathToCopyFile, pathToInsertFile);

    console.log(
      `File successfully copied from ${pathToCopyFile} to ${pathToInsertFile}`,
    );
  } catch (err) {
    console.error(`Error occurred while copying the file: ${err.code}`);
  }
}

copyFile();
