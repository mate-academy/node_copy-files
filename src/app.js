/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const createCopy = (pathToFile, pathToCopyFile) => {
  let oldFile;

  if (pathToFile === pathToCopyFile) {
    return;
  }

  try {
    const data = fs.copyFileSync(pathToFile, 'utf8');

    oldFile = data;
  } catch (error) {
    throw new Error('Wrong path to file');
  }

  try {
    fs.copyFileSync(pathToCopyFile, oldFile);
  } catch (error) {
    throw new Error('Wrong path to copy file');
  }
};

const [path, pathForCopy] = process.argv.slice(2);

createCopy(path, pathForCopy);
