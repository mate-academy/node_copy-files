/* eslint-disable no-console */
'use strict';

const fs = require('fs');

let source, destination, useSync;

process.argv.slice(2).forEach((arg) => {
  if (arg === '--sync') {
    useSync = true;
  } else if (arg === '--async') {
    useSync = false;
  } else if (!source) {
    source = arg;
  } else if (!destination) {
    destination = arg;
  }
});

if (!source || !destination) {
  throw new Error('Source and destination must be specified');
}

if (!fs.existsSync(source)) {
  throw new Error('Source file does not exist');
}

function copyFileAsync() {
  if (source === destination) {
    throw new Error('Source and destination are the same. Exiting.');
  }

  fs.copyFile(source, destination, (err) => {
    if (err) {
      throw new Error(`Error during copy: ${err}`);
    }
    console.log('File was copied successfully');
  });
}

function copyFileSync() {
  if (source === destination) {
    throw new Error('Source and destination are the same. Exiting.');
  }

  try {
    fs.copyFileSync(source, destination);
    console.log('File was copied successfully');
  } catch (err) {
    throw new Error(`Error during copy: ${err}`);
  }
}

if (useSync) {
  copyFileSync();
} else {
  copyFileAsync();
}
