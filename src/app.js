'use strict';

const fs = require('fs');

async function copyFile() {
  const [copyFrom, copyTo] = process.argv.slice(2);

  if (!copyFrom || !copyTo) {
    // eslint-disable-next-line
    console.error('One of values is null');

    return;
  }

  if (copyFrom === copyTo) {
    // eslint-disable-next-line
    console.error('Same paths');

    return;
  }

  try {
    await fs.promises.copyFile(copyFrom, copyTo);
  } catch (err) {
    // eslint-disable-next-line
    console.error(err.message);
  }
}

copyFile();
