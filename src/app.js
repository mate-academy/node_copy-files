/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [source, destination] = process.argv.slice(2);

function copyFile(copyFrom, copyTo) {
  try {
    fs.existsSync(copyFrom);
  } catch (error) {
    console.error(error);
  }

  if (copyFrom === copyTo) {
    return;
  }

  try {
    const fileData = fs.readFileSync(copyFrom, 'utf8');

    try {
      fs.writeFileSync(copyTo, fileData, 'utf8');
    } catch (error) {
      console.error(error);
    }
  } catch (error) {
    console.error(error);
  }
}

copyFile(source, destination);

module.exports = {
  copyFile,
};
