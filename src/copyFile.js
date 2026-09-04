/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFile(src, dest) {
  if (src === dest) {
    console.log('You are trying to copy to the same location');

    return;
  }

  try {
    fs.copyFileSync(src, dest);
    console.log('The file was copied successfully');
  } catch (error) {
    console.log(error);
  }
}

module.exports = { copyFile };
