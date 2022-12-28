/* eslint-disable no-console */
'use strict';

const fs = require('fs');

console.log('write dir/file for copy'
 + 'location for copy (dir/) as args in CLI');

const args = process.argv.slice(2);

const fileForCopy = args[0];
const pathForCopy = args[1];

if (fileForCopy === pathForCopy
   || fileForCopy.slice(0, fileForCopy.indexOf('/') + 1) === pathForCopy) {
  console.log(
    'Search and write as 1-st and 2-nd arg file / location directory for Copy,',
    'exemple: for copy: src/file.txt; copy to: folder/');

  return;
}

const copyFile
= fileForCopy.slice(fileForCopy.indexOf('/')).split('.').join('-copy.');
const fullCopyPath = pathForCopy + copyFile;

fs.readFile(fileForCopy, (err, data) => {
  if (err) {
    console.log(err);
  }

  fs.writeFile(fullCopyPath, data, (error, info) => {
    if (error) {
      console.log(error);
    }
  });
});
