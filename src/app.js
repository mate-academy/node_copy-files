'use strict';

const { writeFile, readFile, existsSync } = require('fs');
// eslint-disable-next-line no-console
const log = console.log;
const [source, destination] = process.argv.slice(2);

if (!source || !destination) {
  log('Specify both source and destination files!');
  process.exit();
}

if (source === destination) {
  log('Can not copy to the same file!');
  process.exit();
}

if (!existsSync(source)) {
  log('Source file does not exist!');
  process.exit();
}

if (existsSync(destination)) {
  log('Destination file is already exist!');
  process.exit();
}

readFile(source, 'utf8', (errRead, data) => {
  if (errRead) {
    log('Error occurred while trying to read source file!');
    process.exit();
  }

  writeFile(destination, data, errWrite => {
    if (errWrite) {
      log('Error occurred while trying to write destination file!');
    } else {
      log('Success');
    }
  });
});
