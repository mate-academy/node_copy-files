/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function createCopy(file, location) {
  if (!file || !location) {
    console.error('Both source file and destination must be provided');

    return;
  }

  if (file === location) {
    console.log('Source file and destination are the same');

    return;
  }

  try {
    const fileContent = fs.readFileSync(file, 'utf-8');

    fs.writeFileSync(location, fileContent, 'utf-8');
    console.log('File copied successfully');
  } catch (error) {
    console.error('An error occured: ', error);
  }
}

createCopy(process.argv[2], process.argv[3]);

module.exports = {
  createCopy,
};
