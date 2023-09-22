/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copyFile = (file, copy) => {
  if (file === copy) {
    console.log(
      'Source file and destination file are the same. No file copied.'
    );

    return;
  }

  try {
    fs.copyFileSync(file, copy);
    console.log('File copied successfully.');
  } catch (error) {
    console.log('An error occurred while copying the file:', error.message);
  }
};

const main = () => {
  if (process.argv[2] === 'cp') {
    // eslint-disable-next-line no-unused-vars
    const [_, __, file, copy] = process.argv;

    copyFile(file, copy);
  }
};

main();
