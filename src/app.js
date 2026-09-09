'use strict';

const fs = require('fs');
const path = require('path');

async function copyFile() {
  const [copyFrom, copyTo] = process.argv.slice(2);

  if (!copyFrom || !copyTo) {
    // eslint-disable-next-line
    console.error('Error: missing source or destination file');

    return;
  }

  const copyFromPath = path.resolve(copyFrom);
  const copyToPath = path.resolve(copyTo);

  if (copyFromPath === copyToPath) {
    return;
  }

  try {
    const stat = await fs.promises.stat(copyFromPath);

    if (!stat.isFile()) {
      // eslint-disable-next-line
      console.error('Error: source is not a file');

      return;
    }

    await fs.promises.copyFile(copyFromPath, copyToPath);
  } catch (err) {
    // eslint-disable-next-line
    console.error(`Error: ${err.message}`);
  }
}

copyFile();
