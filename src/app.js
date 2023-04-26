'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(fileName, result) {
  const sourcePath = path.resolve(fileName);
  const targetPath = path.resolve(result);

  fs.readFile(sourcePath, (err, data) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log('this file not found');
    }

    fs.writeFile(targetPath, data, (error) => {
      if (error) {
        // eslint-disable-next-line no-console
        console.log('some thing was wrong');
      }
    });
  });
};

const [, , source, target] = process.argv;

copyFile(source, target);
