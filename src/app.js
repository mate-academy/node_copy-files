'use strict';

const fs = require('fs/promises');
const path = require('path');
const inquirer = require('inquirer');

const isFileExist = async(findedPath) => {
  try {
    await fs.access(findedPath);

    return true;
  } catch (error) {
    return false;
  }
};

const copyFile = async(fromFilePath, copyFilePath) => {
  const fromPath = path.join('./src/', fromFilePath);
  const copyPath = path.join('./src/', copyFilePath);

  if (fromPath === copyPath) {
    throw new Error('The file paths are the same');
  }

  if (await isFileExist(copyPath)) {
    const { answer } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'answer',
        message: 'File is already exists.\nDo you want to replace that?',
      },
    ]);

    if (!answer) {
      return;
    }
  }

  try {
    const fromFileData = await fs.readFile(
      fromPath,
      'utf-8',
      (err) => {
        if (err) {
          throw err;
        }
      });

    fs.writeFile(copyPath, fromFileData);
  } catch (error) {
    throw error;
  }
};

copyFile('files/text.txt', 'files/copy.txt');
