/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const [fileToCopy, targetPath] = process.argv.slice(2);
const startDir = './src';

if (!fileToCopy || !targetPath) {
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
      if (currFile === fileToCopy || currFile === targetPath) {
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

const checkTheSameFile = [...new Set(foundFiles.map(f => path.basename(f)))];

if (checkTheSameFile.length < 2) {
  return console.log(
    'In target directory already exist the file with such name!'
  );
};

const [file, targetFolder] = foundFiles;

if (foundFiles.length < 2) {
  if (foundFiles.length === 0) {
    return console.log(
      `Unable to proceed. File: ${fileToCopy}`
      + `and ${targetPath} doesn't exist in derictory!`
    );
  }

  if (fileToCopy === path.basename(file)) {
    return console.log(
      `Unable to proceed. File: ${targetPath} doesn't exist in derictory!`
    );
  }

  return console.log(
    `Unable to proceed. File: ${fileToCopy} doesn't exist in derictory!`
  );
}

if (path.dirname(file) === path.dirname(targetFolder)) {
  return;
};

const targetDir = path.dirname(targetFolder);

const targetFilePath = path.join(targetDir, fileToCopy);

fs.copyFile(file, targetFilePath, (err) => {
  if (err) {
    console.error(`Ошибка при копировании файла: ${err}`);
  } else {
    console.log(`Файл успешно скопирован в ${targetFilePath}`);
  }
});
