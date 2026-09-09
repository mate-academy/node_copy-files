'use strict';

const fs = require('fs');

const [outputFile, inputFile] = process.argv.slice(2);

if (outputFile === inputFile) {
  // eslint-disable-next-line
  console.log('You\'re trying to copy to the same location');

  return;
}

const content = fs.readFileSync(outputFile, 'utf8');

fs.writeFileSync(inputFile, content, (error) => {
  if (error) {
    // eslint-disable-next-line
    console.log(error);

    return;
  }

  // eslint-disable-next-line
  console.log('File was successfully copied');
});
