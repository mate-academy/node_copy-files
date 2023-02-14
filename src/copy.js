/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [fileToCopyPath, newFilePath] = process.argv.slice(2);

copy(fileToCopyPath, newFilePath);

function copy(toCopyPath, toPastePath) {
  if (toCopyPath === toPastePath) {
    return;
  }

  try {
    const contentToCopy = fs.readFileSync(toCopyPath, 'utf8');

    fs.writeFileSync(toPastePath, contentToCopy);
  } catch (error) {
    console.log(error);
  }
};
