'use strict';

const fs = require('fs');

function copyFile() {
  const [, , fileName, nameOfCopy] = process.argv;

  if (!fileName || !nameOfCopy) {
    // eslint-disable-next-line no-console
    console.error('Please provide source and destination');

    return;
  }

  if (fileName === nameOfCopy) {
    return;
  }

  if (!fs.existsSync(fileName)) {
    // eslint-disable-next-line no-console
    console.error(`Source file does not exist: ${fileName}`);

    return;
  }

  const srcStat = fs.statSync(fileName);

  if (srcStat.isDirectory()) {
    // eslint-disable-next-line no-console
    console.error(`Source is a directory: ${fileName}`);

    return;
  }

  if (fs.existsSync(nameOfCopy)) {
    const destStat = fs.statSync(nameOfCopy);

    if (destStat.isDirectory()) {
      // eslint-disable-next-line no-console
      console.error(`Destination is a directory: ${nameOfCopy}`);

      return;
    }
  }

  fs.copyFileSync(fileName, nameOfCopy);
}

copyFile();
