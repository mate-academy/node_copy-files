/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(sourcePath, destinationPath) {
  const absoluteSourcePath = path.resolve(sourcePath);
  const absoluteDestinationPath = path.resolve(destinationPath);

  if (absoluteSourcePath === absoluteDestinationPath) {
    console.log('Source and destination are the same');

    return;
  }

  try {
    const fileContent = fs.readFileSync(absoluteSourcePath);

    fs.writeFileSync(absoluteDestinationPath, fileContent);

    console.log(`File copied successfully`);
  } catch (error) {
    console.log('Error copying a file');
  }
}

const sourceFilePath = 'test.txt';
const destinationFilePath = 'test2.txt';

copyFile(sourceFilePath, destinationFilePath);
