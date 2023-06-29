'use strict';

const fs = require('fs');
const path = require('path');
const firstFilePath = path.join(__dirname, '/file.txt');
const secondFilePath = path.join(__dirname, '/file-copy.txt');

const copyFiles = (file, fileToCopy) => {
  try {
    if (file === fileToCopy) {
      throw new Error('Do not copy data to the same file');
    }

    const firstFileData = fs.readFileSync(file, 'utf-8', (err, data) => {
      if (err) {
        throw new Error('Some error occurred while reading a file');
      }

      return data;
    });

    fs.writeFileSync(fileToCopy, firstFileData, (err) => {
      if (err) {
        throw new Error('Some error occurred while writing to a file');
      }
    });
  } catch (error) {
    // Some error handling
  }
};

copyFiles(firstFilePath, secondFilePath);
