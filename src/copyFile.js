/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const copyFile = (from, to) => {
  const fromPath = path.join(__dirname, from);
  const toPath = path.join(__dirname, to);

  try {
    fs.copyFileSync(fromPath, toPath);
    console.log('successfully copied');
  } catch (error) {
    console.log('error', error);
  }
};

module.exports = { copyFile };
