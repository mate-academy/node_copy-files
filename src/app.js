/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const [ src, dest ] = process.argv.slice(2);

fs.copyFile(src, dest, (err) => {
  if (src === dest) {
    throw new Error('You are trying to copy to the same location');
  }

  if (err) {
    console.log(err);
  }

  console.log(`The file was copied from ${src} to ${dest}`);
});
