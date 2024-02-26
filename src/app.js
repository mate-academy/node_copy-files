/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');
const [from, to] = process.argv.slice(2);

async function copyFile(copyFrom, copyTo) {
  try {
    if (copyFrom !== copyTo) {
      const content = await fs.readFile(copyFrom, { encoding: 'utf-8' });

      await fs.writeFile(copyTo, content, { encoding: 'utf-8' });
      console.log('Copy is done');
    }
  } catch (e) {
    throw new Error(e);
  }
}

copyFile(from, to);
