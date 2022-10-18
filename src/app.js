/* eslint-disable no-console */
'use strict';

const { writeFile, readFile, existsSync } = require('fs');
const [source, destination] = process.argv.slice(2);

const error = (err) => {
  throw new Error(err);
};

if (!source || !destination) {
  error('❌ Specify both source and destination files ❌\n');
}

if (source === destination) {
  error('❌ You can\'t copy to the same file ❌\n');
}

if (!existsSync(source)) {
  error('❌ Source file does not exist ❌\n');
}

if (existsSync(destination)) {
  error('❌ Destination file is already exist ❌\n');
}

readFile(source, 'utf-8', (errRead, data) => {
  if (errRead) {
    error('❌ Error occurred while trying to read source file ❌\n');
  }

  writeFile(destination, data, errWrite => {
    if (errWrite) {
      error('❌ Error occurred while trying to write destination file ❌\n');
    } else {
      console.log('\nSuccess✅');
    }
  });
});
