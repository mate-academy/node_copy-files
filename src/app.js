/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [file, location] = process.argv.slice(2);

function copyFile() {
  try {
    if (!file || !location) {
      throw new Error('Only one argument is provided');
    }

    const content = fs.readFileSync(file, 'utf-8');

    fs.writeFileSync(location, content, 'utf-8');
  } catch (error) {
    console.error(error);
  }
}

copyFile();

module.exports = { copyFile };
