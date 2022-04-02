'use strict';

const fs = require('fs');
const path = require('path');

const [source, destination] = process.argv.slice(2);

copyFile(source, destination);

function copyFile(sourceName, destinationName) {
  if (path.dirname(sourceName) === path.dirname(destinationName)) {
    return;
  }

  fs.copyFile(sourceName, destinationName, err => {
    if (err) {
      throw err;
    }
  });
}
