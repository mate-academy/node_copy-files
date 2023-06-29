'use strict';

const fs = require('fs');
const path = require('path');
const firstFilePath = path.join(__dirname, '/file.txt');
const secondFilePath = path.join(__dirname, '/file-copy.txt');

const copyFiles = (file, fileToCopy) => {
  if (file !== fileToCopy) {
    const firstFileData = fs.readFileSync(file, 'utf-8');

    fs.writeFileSync(fileToCopy, firstFileData);
  } else {
    return 'Trying to copy to the same location';
  }
};

copyFiles(firstFilePath, secondFilePath);
