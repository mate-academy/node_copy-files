/* eslint-disable no-console */
'use strict';

const fs = require('node:fs/promises');
const path = require('node:path');

async function copyFiles() {
  const pathes = process.argv.slice(2);

  if (pathes.length !== 2) {
    console.error('You need take 2 path');

    return;
  }

  const [src, dest] = pathes;

  const srcPath = path.resolve(src);
  const destPath = path.resolve(dest);

  if (srcPath === destPath) {
    return;
  }

  try {
    const states = await fs.stat(srcPath);

    if (!states.isFile()) {
      console.error('no valid path');

      return;
    }

    await fs.copyFile(srcPath, destPath);
  } catch (err) {
    console.error(err);
  }
}

copyFiles();
