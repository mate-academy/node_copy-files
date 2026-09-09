/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFiles() {
  const [firstFile, copyFile] = process.argv.slice(2);

  if (!firstFile || !copyFile) {
    console.error('Should be two files');

    return;
  }

  if (firstFile === copyFile) {
    console.error('The same files');

    return;
  }

  if (!fs.existsSync(firstFile)) {
    console.error("This file isn't in a directory");

    return;
  }

  const statFirstFile = fs.statSync(firstFile);

  if (statFirstFile.isDirectory()) {
    console.error(`${firstFile} is a directory`);

    return;
  }

  try {
    const statCopyFile = fs.statSync(copyFile);

    if (statCopyFile.isDirectory()) {
      console.error(`${copyFile} is a directory`);

      return;
    }
  } catch (error) {}

  const data = fs.readFileSync(firstFile, { encoding: 'utf8' });

  fs.writeFileSync(copyFile, data, { encoding: 'utf8' });
}

copyFiles();
