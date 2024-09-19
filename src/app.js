/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [inputPath, outputPath] = process.argv.slice(2);

async function copyFile(from, to) {
  let isItFile = true;

  fs.stat(from, (err, stats) => {
    if (err) {
      console.error('File not found!');

      return false;
    }

    isItFile = stats.isFile();
  });

  if (from && to && isItFile && from !== to) {
    try {
      const fileData = fs.readFileSync(from, 'utf-8');

      fs.writeFileSync(to, fileData);
    } catch (err) {
      console.error(err);
    }

    console.log('\x1b[32m', 'File was copied succesfully!');

    return;
  }

  console.error('File not found!');
}

copyFile(inputPath, outputPath);

module.exports = { copyFile };
