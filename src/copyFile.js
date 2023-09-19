/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFile(src, dest) {
  if (src === dest) {
    console.log('You are trying to copy to the same location');

    return;
  }

  try {
    const data = fs.readFileSync(src);

    fs.writeFileSync(dest, data);
    console.log('The file was copied successfully');
  } catch (error) {
    console.log(error);
  }
}

module.exports = { copyFile };
