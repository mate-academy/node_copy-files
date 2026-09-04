'use strict';

const fs = require('fs');

const [outputFile, inputFile] = process.argv.slice(2);

if (outputFile === inputFile) {
  // eslint-disable-next-line
  console.log('You\'re trying to copy file to itself. Please try again.');

  return;
}

fs.copyFile(outputFile, inputFile, (err) => {
  if (err) {
    // eslint-disable-next-line
    console.log(err);

    return;
  }

  // eslint-disable-next-line
  console.log(`File '${outputFile}' was successfuly copied to '${inputFile}'!`);
});
