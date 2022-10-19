/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [copyFrom, copyTo] = process.argv.slice(2);

if (copyFrom === copyTo) {
  console.log('Can`t copy to the exact location');

  return;
}

fs.readFile(copyFrom, 'utf-8', (errorRead, data) => {
  if (errorRead) {
    console.error(errorRead);

    return;
  }

  fs.writeFile(copyTo, data, 'utf-8', errorWrite => {
    if (errorWrite) {
      console.error(errorWrite);

      return;
    }

    console.log('File was coppied succesfully');
  });
});
