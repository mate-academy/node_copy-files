/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [sourcePath, destinationPath] = process.argv.slice(2);

const copy = () => {
  if (!sourcePath || !destinationPath) {
    console.error('No source or destination provided');

    return;
  }

  if (sourcePath === destinationPath) {
    console.error('The paths are identical');

    return;
  }

  const isExistSource = fs.existsSync(sourcePath);

  if (!isExistSource) {
    console.error('Non-existent source file');

    return;
  }

  if (destinationPath) {
    fs.copyFile(sourcePath, destinationPath, (err) => {
      if (err) {
        console.error(err.message);
      }
    });
  }
};

copy();
