'use strict';
/* eslint-disable no-console */

const fs = require('fs');

function copyFile() {
  const [source, destination] = process.argv.slice(2);

  if (source === destination) {
    console.error('Source should be different from destination');

    return;
  }

  if (!source || !destination) {
    console.error('Please provide source and destination paths.');

    return;
  }

  fs.copyFile(source, destination, (error) => {
    if (error) {
      console.error('Something went wrong:', error);

      return;
    }

    console.log('File copied successfully');
  });
}

copyFile();
