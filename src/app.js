/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const [sourceFile, targetFile] = process.argv.slice(2);

const dirPath = path.dirname(targetFile);
const baseNameFile = path.basename(sourceFile);
const targetFilePath = path.join(dirPath, baseNameFile);
const filesInside = fs.readdirSync(dirPath);

if (filesInside.includes(baseNameFile)) {
  return console.log(
    `Error, couldn't copy the file.`
    + `${baseNameFile} already exist in this directory`
  );
}

fs.copyFile(sourceFile, targetFilePath, (err) => {
  if (err) {
    console.error(`There is an error with copying the file: ${err}`);
  } else {
    console.log(`File ${baseNameFile} successfully copied in ${dirPath}`);
  }
});
