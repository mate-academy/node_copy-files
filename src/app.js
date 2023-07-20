'use strict';

const { copyFile } = require('fs');
const { dirname } = require('path');

const [ , , copyFrom, copyTo ] = process.argv;

(() => {
  const pathFrom = dirname(copyFrom);
  const pathTo = dirname(copyTo);

  if (pathFrom !== pathTo) {
    copyFile(copyFrom, copyTo, (error) => {
      if (error) {
        throw new Error('Failed to copy');
      }
    });
  }
})();
