'use strict';

const fs = require('fs');
const path = require('path');

const [fileToCopy, copyFileName] = process.argv.slice(2);
if (fileToCopy === copyFileName) {
  return;
}
const fileToCopyPath = path.resolve(__dirname, '../', fileToCopy);
const destinationDirname = path.dirname(fileToCopyPath);
const copyFilePath = path.resolve(destinationDirname, copyFileName);

fs.copyFile(fileToCopyPath, copyFilePath, (error) => {
  if (error) {
    throw new Error(error);
  }
});
