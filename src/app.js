/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const [file, location] = process.argv.slice(2);

function copyFile() {
  try {
    if (!file || !location) {
      throw new Error('Both file and location arguments are required');
    }

    if (file === location) {
      throw new Error('Source and destination files are the same.');
    }

    const content = fs.readFileSync(file, 'utf-8');

    fs.writeFileSync(location, content, 'utf-8');
    console.log('File copied successfully!');
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

copyFile();

module.exports = { copyFile };
