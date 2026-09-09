'use strict';

const fs = require('node:fs');

const main = function () {
  const [sourceFile, destinationFile] = process.argv.slice(2);

  if (!sourceFile || !destinationFile) {
    // eslint-disable-next-line no-console
    console.error('Only 1 arg is provided.');

    return;
  }

  fs.copyFile(sourceFile, destinationFile, (error) => {
    // eslint-disable-next-line no-console
    console.error(error);
  });
};

main();
