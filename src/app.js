/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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
    console.error('Error copying a file:', error);
  }
}

rl.question('Enter the source file path: ', (sourceFilePath) => {
  rl.question('Enter the destination file path: ', (destinationFilePath) => {
    copyFile(sourceFilePath, destinationFilePath);
    rl.close();
  });
});
