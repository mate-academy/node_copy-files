'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(sourcePath, destinationPath) {
  if (path.resolve(sourcePath) === path.resolve(destinationPath)) {
    global.console.log(
      'Source and destination paths are the same, no action taken.'
    );

    return;
  }

  if (!fs.existsSync(sourcePath)) {
    global.console.log(`Source file '${sourcePath}' does not exist.`);

    return;
  }

  if (!fs.statSync(sourcePath).isFile()) {
    global.console.log(`Source path '${sourcePath}' is not a file.`);

    return;
  }

  fs.copyFileSync(sourcePath, destinationPath);

  global.console.log(`File '${sourcePath}' copied to '${destinationPath}'.`);
}

copyFile('file.txt', 'file-copy.txt');
