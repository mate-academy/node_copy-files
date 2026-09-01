'use strict';

const path = require('path');
const { copyFile, stat } = require('fs/promises');
const { exit } = require('process');

const normalizedArgs = process.argv.slice(2);

async function copyFiles(commandLineArgs) {
  try {
    if (commandLineArgs.length < 2) {
      throw new Error('Enter two arguments');
    }

    const currPath = path.resolve(commandLineArgs[0]);
    const newPath = path.resolve(commandLineArgs[1]);

    if (currPath === newPath) {
      return;
    }

    const stats = await stat(currPath);

    if (!stats.isFile()) {
      throw new Error('Wrong path');
    }

    await copyFile(currPath, newPath);
  } catch (error) {
    console.error('Error copying file:', error.message);
    exit(1);
  }
}

copyFiles(normalizedArgs);
