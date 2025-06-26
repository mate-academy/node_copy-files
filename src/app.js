/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copyFile() {
  const copyArgs = process.argv.slice(2);

  if (copyArgs.length !== 2) {
    console.error('Script accepts 2 arguments: source and destination');

    return;
  }

  const [sourceFile, destinationFile] = copyArgs;

  if (sourceFile === destinationFile) {
    return;
  }

  const fileName = path.basename(destinationFile);
  const destinationDirName = path.dirname(destinationFile);
  const sourceDirName = path.dirname(sourceFile);

  if (!fs.existsSync(sourceFile)) {
    console.error('Source file is not exist');

    return;
  }

  try {
    fs.copyFileSync(sourceFile, destinationFile);

    console.log(
      `File ${fileName} copied from ${sourceDirName} to ${destinationDirName}`,
    );
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

copyFile();

module.exports = { copyFile };
