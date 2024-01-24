/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [copyFrom, copyTo] = process.argv.slice(2);

const copyFile = async(fromPath, toPath) => {
  if (fromPath === toPath) {
    // throw new Error('Error, the same path');
    return;
  }

  if (!fs.existsSync(fromPath)) {
    throw new Error(`file doen't exist`);
  }

  try {
    fs.copyFileSync(fromPath, toPath);
    console.log('the copy has been created');
  } catch (error) {
    throw new Error('something went wrong, please try again later');
  }
};

copyFile(copyFrom, copyTo);
