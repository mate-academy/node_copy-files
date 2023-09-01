/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFile(destFrom, destTo) {
  if (destFrom === destTo) {
    console.log('Error, the same location');

    return;
  }

  try {
    fs.copyFileSync(destFrom, destTo);
    console.log(`The file was copied from ${destFrom} to ${destTo}`);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { copyFile };
