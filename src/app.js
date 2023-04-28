/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');
const { terminal } = require('./terminal');

function copyFile(source, destination) {
  const sourcePath = path.resolve(__dirname, source);
  const destPath = path.resolve(__dirname, destination);

  if (!fs.existsSync(sourcePath)) {
    console.log('File does not exist');
    ask();

    return;
  }

  if (sourcePath === destPath) {
    console.log('Source and destination are the same. Nothing to do.');
    terminal.close();
  }

  const readStream = fs.createReadStream(sourcePath);
  const writeStream = fs.createWriteStream(destPath);

  readStream.pipe(writeStream);

  writeStream.on('close', () => {
    console.log(`Successfully copied ${sourcePath} to ${destPath}.`);
    terminal.close();

    ask();
  });
}

const ask = () => {
  terminal.question('write paths: from... to... ', (answer) => {
    const paths = answer.split(' ');

    if (paths.length !== 2) {
      console.log('impossible path');
      ask();

      return;
    }

    copyFile(...paths);
  });
};

ask();
