'use strict';

const fs = require('fs');
const path = require('path');

const [pathToFile, pathToReplace] = process.argv.slice(2);

if (!pathToFile || !pathToReplace) {
  // eslint-disable-next-line no-console
  console.error('You must write 2 path');
} else {
  if (path.resolve(pathToFile) === path.resolve(pathToReplace)) {
    // eslint-disable-next-line no-console
    console.error('This is a similar path.');
  }

  fs.copyFile(pathToFile, pathToReplace, (error) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.error('Copy Error');
    } else {
      // eslint-disable-next-line no-console
      return console.log('The file has been copied');
    }
  });
}
