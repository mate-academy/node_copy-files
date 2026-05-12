'use strict';

const fs = require('fs');

(() => {
  const sourceFilePath = process.argv[2];
  const destinationFilePath = process.argv[3];

  if (process.argv.length !== 4) {
    // eslint-disable-next-line no-console
    console.error('Usage: node app.js <sourceFilePath> <destinationFilePath>');

    return;
  }

  if (sourceFilePath === destinationFilePath) {
    return;
  }

  if (!fs.existsSync(sourceFilePath)) {
    // eslint-disable-next-line no-console
    console.error('Source file does not exist');

    return;
  }

  if (fs.statSync(sourceFilePath).isDirectory()) {
    // eslint-disable-next-line no-console
    console.error('Source is a directory');

    return;
  }

  if (
    fs.existsSync(destinationFilePath) &&
    fs.statSync(destinationFilePath).isDirectory()
  ) {
    // eslint-disable-next-line no-console
    console.error('Destination is a directory');

    return;
  }

  fs.copyFileSync(sourceFilePath, destinationFilePath);
})();
