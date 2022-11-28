'use strict';

// instruction in how to use app
// sourcePath <string> source filename to copy
// destinationPath <string> destination filename of the copy operation
// in command line type 'node src/app.js sourcePath destinationPath'
// example: command 'node src/app.js src/dir1/file.txt src/dir2/file-copy.txt'
// will copy file from dir1 to dir2

const copyFile = require('fs-copy-file');

const source = process.argv[2];
const dest = process.argv[3];

const callback = (err) => {
  if (err) {
    throw err;
  }
};

const sourcePath = source.split('/').slice(0, -1).join('');
const destPath = dest.split('/').slice(0, -1).join('');
const isSamePath = sourcePath === destPath;

if (isSamePath) {
  throw new Error('Copying files to the same location is not allowed');
} else {
  copyFile(source, dest, callback);
}
