/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const [fileToCopy, fileToMove] = process.argv.slice(2);
const startDir = './src';

if (!fileToCopy || !fileToMove) {
  return console.log(
    'Unable to proceed. Please ensure that'
    + 'you specified 2 paths. e.g node src/app.js file1 file2'
  );
}

const findTheFile = (dir) => {
  const allFiles = [];

  const filesInDir = fs.readdirSync(dir);

  filesInDir.forEach(currFile => {
    const pathName = `${dir}${path.sep}${currFile}`;

    if (!fs.lstatSync(pathName).isDirectory()) {
      if (currFile === fileToCopy || currFile === fileToMove) {
        allFiles.push(pathName);
      };
    } else {
      const insideDirFile = findTheFile(pathName);

      allFiles.push(...insideDirFile);
    }
  });

  return allFiles;
};

const foundFiles = findTheFile(startDir);
const [file, targetFolder] = foundFiles;

if (path.dirname(file) === path.dirname(targetFolder)) {
  return;
};

if (foundFiles.length < 2) {
  if (fileToCopy === file.split('/').pop()) {
    return console.log(
      `Unable to proceed. File: ${fileToMove} doesn't exist in derictory!`
    );
  }

  return console.log(
    `Unable to proceed. File: ${fileToCopy} doesn't exist in derictory!`
  );
}

const targetDir = path.dirname(targetFolder);

const targetFilePath = path.join(targetDir, fileToCopy);

fs.copyFile(file, targetFilePath, (err) => {
  if (err) {
    console.error(`Ошибка при копировании файла: ${err}`);
  } else {
    console.log(`Файл успешно скопирован в ${targetFilePath}`);
  }
});
