/* eslint-disable no-console */
'use strict';

const fs = require('fs');
// const path = require('path');

function main() {
  const [filePath, fileCopyPath] = process.argv.slice(2);

  if (!fileCopyPath) {
    console.error('it should be 2 files');

    return;
  }

  if (filePath === fileCopyPath) {
    return;
  }

  if (!fs.existsSync(filePath)) {
    console.error('non-existing file');

    return;
  }

  const stats1 = fs.statSync(filePath);

  if (stats1.isDirectory()) {
    console.error('Source is a directory, not a file');

    return;
  }

  try {
    const stats2 = fs.statSync(fileCopyPath);

    if (stats2.isDirectory()) {
      console.error('Destination is a directory');

      return;
    }
  } catch (err) {
    // File does not exist (which is fine)
  }

  const initialFile = fs.readFileSync(filePath, 'utf-8');

  fs.writeFileSync(fileCopyPath, initialFile);
}

main();
