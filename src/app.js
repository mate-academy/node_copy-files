/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');

async function copyFile() {
  const args = process.argv.slice(2);

  const pathOriginalFile = args[0];
  const pathCopyFile = args[1];

  if (!pathOriginalFile || !pathCopyFile) {
    console.error('Error: Missing arguments');

    return;
  }

  if (pathOriginalFile === pathCopyFile) {
    return;
  }

  try {
    const stats = await fs.stat(pathOriginalFile);

    if (stats.isDirectory()) {
      console.error('Error: Source is a directory');

      return;
    }

    const data = await fs.readFile(pathOriginalFile);

    await fs.writeFile(pathCopyFile, data);
  } catch (error) {
    console.error('Cannot copy: ', error);
  }
}

copyFile();

module.exports = { copyFile };
