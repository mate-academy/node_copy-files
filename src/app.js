'use strict';

const { readFile, writeFile, existsSync } = require('fs');
const [, , source, destination] = process.argv;
// eslint-disable-next-line no-console
const log = console.log;

if (!source || !destination) {
  log('Please provide a source and destination file');
  process.exit();
}

if (existsSync(source)) {
  log('Please provide a valid source file');
  process.exit();
}

if (existsSync(destination)) {
  log('Destination file already exists');
} else {
  readFile(source, 'utf8', (error, data) => {
    if (error) {
      log('Error reading source file');

      return;
    }

    writeFile(destination, data, (err) => {
      if (err) {
        log('Error writing destination file');
      } else {
        log('File copied successfully');
      }
    });
  });
}
