'use strict';
/* eslint-disable no-console */

const file1 = process.argv[2];
const file2 = process.argv[3];

const fs = require('fs');

function copy(urlMain, urlCopy) {
  if (urlMain === urlCopy) {
    console.error('The links are the same');

    return;
  }

  if (!urlMain || !urlCopy) {
    console.error('One of the arguments is not defined');

    return;
  }

  fs.copyFile(urlMain, urlCopy, (error) => {
    if (error) {
      console.error(error);
    }
  });
}

copy(file1, file2);

module.exports = { copy };
