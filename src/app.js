'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(fileName, result) {
  if (fileName === result) {
    // eslint-disable-next-line no-console
    console.log('file and target same');
  } else {
    const sourcePath = path.resolve(fileName);
    const targetPath = path.resolve(result);

    fs.readFile(sourcePath, (err, data) => {
      if (err) {
      // eslint-disable-next-line no-console
        console.log(`File not found: ${sourcePath}`);

        return;
      }

      fs.writeFile(targetPath, data, (error) => {
        if (error) {
        // eslint-disable-next-line no-console
          console.log(`Unable to write to file: ${targetPath}`);
        }
      });
    });
  }
};

const [, , source, target] = process.argv;

copyFile(source, target);
