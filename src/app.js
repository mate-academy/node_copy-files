'use strict';
/* eslint-disable no-console */

const fs = require('fs');

function copyFile() {
  const [fileName, fileCopy] = process.argv.slice(2);

  if (!fileName || !fileCopy) {
    console.error('Need more arguments');

    return;
  }

  if (fileName === fileCopy) {
    console.error('Source and destination are the same');

    return;
  }

  let data;

  try {
    data = fs.readFileSync(fileName, 'utf8');
  } catch (err) {
    console.error(err);

    return;
  }

  try {
    fs.writeFileSync(fileCopy, data);
  } catch (err) {
    console.error(err);
  }
}

copyFile();

module.exports = { copyFile };
