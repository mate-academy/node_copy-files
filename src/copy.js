/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copyFile = (source, destination) => {
  if (source === destination) {
    console.log('File can not be copied to the same location!');

    return;
  }

  fs.copyFile(source, destination, (error) => {
    if (error) {
      console.error(error);

      return;
    }
    console.log(`File copied successfully from ${source} to ${destination}`);
  });
};

module.exports = { copyFile };
