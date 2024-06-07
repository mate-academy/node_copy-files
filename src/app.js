/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');

(async () => {
  const [copyFrom, copyTo] = process.argv.slice(2);

  const isDirectory = await fs
    .lstat(copyTo)
    .then((stats) => stats.isDirectory())
    .catch(() => false);

  if (!copyFrom || !copyTo || isDirectory) {
    console.error();

    return;
  }

  if (copyFrom !== copyTo) {
    try {
      const data = await fs.readFile(copyFrom, 'utf-8');

      fs.writeFile(copyTo, data, 'utf-8');
    } catch (e) {
      console.error();
    }
  }
})();
