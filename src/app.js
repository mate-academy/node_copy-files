'use strict';

const { writeFile, readFile, existsSync } = require('fs');
// eslint-disable-next-line no-console
const log = console.log;
const [source, destination] = process.argv.slice(2);

const isValidFilename = (filename) => {
  const rg1 = /^[^\\/:*?"<>|]+$/;
  const rg2 = /^\./;
  const rg3 = /^(nul|prn|con|lpt[0-9]|com[0-9])(\.|$)/i;

  return rg1.test(filename) && !rg2.test(filename) && !rg3.test(filename);
};

if (!source || !destination) {
  log('Specify both source and destination files!');
  process.exit();
}

if (source === destination) {
  log('Can not copy to the same file!');
  process.exit();
}

if (!isValidFilename(source)) {
  log('Source path is invalid!');
  process.exit();
}

if (!isValidFilename(destination)) {
  log('Destination path is invalid!');
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
