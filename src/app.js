/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copy(source, result) {
  fs.cp(source, result, (error) => {
    if (error) {
      console.error('Something wrong');

      return;
    }
    console.log('File has been copied');
  });
}

const command = process.argv[2];
const sourceFile = process.argv[3];
const resultFile = process.argv[4];

if (process.argv[5]) {
  console.log('Only 3 param accept');
} else if (sourceFile === resultFile) {
  console.log('No copy to same file');
} else if (command === 'cp') {
  copy(sourceFile, resultFile);
} else {
  console.log('Command must be "cp"');
}
