/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copyFile = () => {
  const args = process.argv.slice(2);

  if (args.length === 1) {
    console.error('No destination path');

    return;
  }

  if (args.length !== 2) {
    console.log('No files for copy');

    return;
  }

  const filePath = args[0];
  const copiedFilePath = args[1];

  if (filePath === copiedFilePath) {
    console.log('Paths of files are the same');

    return;
  }

  try {
    if (fs.existsSync(filePath)) {
      fs.copyFileSync(filePath, copiedFilePath);
    } else {
      console.log('Origin path does not exist');
    }
  } catch (err) {
    console.error(err);
  };
};

copyFile();
