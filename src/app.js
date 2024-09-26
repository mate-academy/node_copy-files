/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const { copyFile } = require('fs').promises;
const path = require('path');

async function copyFileFunction() {
  const [command, fileNameForCopy, newFile] = process.argv.slice(2);

  if (!command) {
    console.log('Please type the correct command');

    return;
  }

  const isCorrectCommand = ['cp', 'copy'].includes(command.toLowerCase());
  const targetFilePath = path.join(__dirname, fileNameForCopy);
  const newFilePath = path.join(__dirname, newFile);

  if (!fs.existsSync(targetFilePath)) {
    console.log('You passed invalid file name');

    return;
  }

  if (!isCorrectCommand) {
    console.log('You typed invalid command');

    return;
  }

  if (isCorrectCommand && fileNameForCopy === newFile) {
    return 'You can\' copy file with the same path';
  }

  try {
    await copyFile(targetFilePath, newFilePath);
  } catch (error) {
    console.error(error);
  }
}

copyFileFunction();
