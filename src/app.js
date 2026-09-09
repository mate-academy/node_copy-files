/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const [fileForCopy, copyTo] = process.argv.slice(2);

if (process.argv.slice(2).length !== 2) {
  console.error(
    'Invalid argument count: exactly two positional arguments are required',
  );

  process.exit(0);
}

copyFile(fileForCopy, copyTo);

function copyFile(source, newPath) {
  const regularExpression = /^[/-]/;
  const argsIsInvalid =
    regularExpression.test(source) || regularExpression.test(newPath);
  const pathsIsEqual = path.resolve(source) === path.resolve(newPath);

  if (pathsIsEqual) {
    console.error('Source and destination refer to the same path');

    return;
  }

  if (argsIsInvalid) {
    console.error('Flags/options are not supported');

    process.exit(0);
  }

  fs.readFile(source, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      fs.writeFile(newPath, data, (error) => {
        if (error) {
          console.error(error);
        }
      });
    }
  });
}
