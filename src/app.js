/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(sourceFile, destinationFile) {
  const sourcePath = path.resolve(sourceFile);
  const destinationFilePath = path.resolve(destinationFile);
  const fileName = path.basename(sourcePath);

  if (!fs.existsSync(sourcePath)) {
    console.error(
      `The file ${fileName} does not exist at the source location.`
    );

    return;
  }

  if (sourcePath === destinationFilePath) {
    console.log(
      'Source and destination file paths are the same. No action taken.'
    );

    return;
  }

  fs.copyFileSync(sourcePath, destinationFilePath);
  console.log(`File ${fileName} has been copied to ${destinationFilePath}`);
}

copyFile('file.txt', 'file-copy.txt');
