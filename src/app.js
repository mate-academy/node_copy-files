/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function createCopy(source, destination) {
  if (!source || !destination) {
    console.error('Source file and destination must be provided');

    return;
  }

  if (source === destination) {
    console.error('Source file and destination are the same');

    return;
  }

  try {
    const fileContent = fs.readFileSync(source, 'utf-8');

    fs.writeFileSync(destination, fileContent, 'utf-8');
    console.log('File copied successfully');
  } catch (error) {
    console.error('An error occured: ', error);
  }
}

createCopy(process.argv[2], process.argv[3]);

module.exports = {
  createCopy,
};
