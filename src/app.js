/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');
const { terminal } = require('./terminal');

function copyFile(source, destination) {
  const sourcePath = path.resolve(source);
  const destPath = path.resolve(destination);

  if (sourcePath === destPath) {
    console.log('Source and destination are the same. Nothing to do.');

    return;
  }

  const readStream = fs.createReadStream(sourcePath);
  const writeStream = fs.createWriteStream(destPath);

  readStream.pipe(writeStream);

  writeStream.on('close', () => {
    console.log(`Successfully copied ${sourcePath} to ${destPath}.`);
    terminal.close();
  });
}

terminal.question('write paths: from... to... ', (answer) => {
  const paths = answer.split(' ');

  if (paths.length !== 2) {
    console.log('impossible path');
    terminal.close();

    return;
  }

  copyFile(...paths);
});
