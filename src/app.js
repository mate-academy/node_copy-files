/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copyFile = () => {
  const args = process.argv.slice(2);

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
    const data = fs.readFileSync(filePath);

    fs.writeFileSync(copiedFilePath, data);
  } catch (err) {
    console.error(err);
  };
};

copyFile();
