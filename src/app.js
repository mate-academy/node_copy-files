/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(sourcePath, destinationPath) {
  const absoluteSourcePath = path.resolve(sourcePath);
  const absoluteDestinationPath = path.resolve(destinationPath);

  if (absoluteSourcePath === absoluteDestinationPath) {
    throw new Error('Source and destination are the same');
  }

  try {
    const fileContent = fs.readFileSync(absoluteSourcePath, 'utf-8');

    fs.writeFileSync(absoluteDestinationPath, fileContent, 'utf-8');

    console.log('File copied successfully');
  } catch (error) {
    throw new Error('Error copying a file');
  }
}

const sourceFilePath = 'test.txt';
const destinationFilePath = 'test2.txt';

copyFile(sourceFilePath, destinationFilePath);
