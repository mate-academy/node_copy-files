/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFiles(source, destination) {
  if (source === destination) {
    console.log('Source path and destination path are the same');

    return;
  }

  try {
    fs.copyFileSync(source, destination);
    console.log('Copying was successful');
  } catch (error) {
    console.log(`Unable to copy because of ${error}`);
  }
}

module.exports = { copyFiles };
