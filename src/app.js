'use strict';

const fs = require('fs');
const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Please specify the output file: ', (outputFile) => {
  terminal.question('Please specify the input file: ', (inputFile) => {

    if (outputFile === inputFile) {
      // eslint-disable-next-line
      console.log('You\'re trying to copy file to itself. Please try again.');

      terminal.close();

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

    terminal.close();
  });
});
