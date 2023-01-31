/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [oldFile, newFile] = process.argv.slice(2);

console.log(oldFile, newFile);

oldFile !== newFile
  ? fs.copyFile(oldFile, newFile, callback)
  : console.log('Please, copy to file to another location');

function callback(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`${oldFile} was copied to ${newFile}`);
  }
}
