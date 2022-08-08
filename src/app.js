'use strict';

const fs = require('fs');

const [firstFile, secondFile] = process.argv.slice(2);

if (firstFile === secondFile) {
  // eslint-disable-next-line no-console
  console.log('You\'re trying to copy file to itself.');

  return;
}

fs.copyFile(`./src/${firstFile}`, `./src/${secondFile}`, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(err);

    return;
  }

  // eslint-disable-next-line no-console
  console.log(`File ${firstFile} was successfully copied to ${secondFile}`);
});
