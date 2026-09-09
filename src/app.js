'use strict';

const fs = require('node:fs');
// const path = require('node:path');

const [source, destination] = process.argv.slice(2);

const copyFile = (copyFrom, copyTo) => {
  try {
    fs.existsSync(copyFrom);
  } catch (error) {
    // eslint-disable-next-line
    console.error(
      `Error: Source file does not exist: ${copyFrom}\n${error.message}`,
    );
  }

  if (copyFrom === copyTo) {
    return;
  }

  try {
    const fileData = fs.readFileSync(copyFrom, 'utf8');

    try {
      fs.writeFileSync(copyTo, fileData, 'utf8');
    } catch (error) {
      // eslint-disable-next-line
      console.error(`Error writing file: ${copyTo}\n${error.message}`);
    }
  } catch (error) {
    // eslint-disable-next-line
    console.error(`Error reading file: ${copyFrom}\n${error.message}`);
  }
};

copyFile(source, destination);

module.exports = { copyFile };
