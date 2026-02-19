/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');

async function copyFiles() {
  const [src, dest] = process.argv.slice(2);

  if (!src || !dest) {
    console.error('Two arguments are required');

    return;
  }

  if (src === dest) {
    return;
  }

  let srcStat;

  try {
    srcStat = await fs.stat(src);
  } catch {
    console.error('Source file does not exist');

    return;
  }

  if (!srcStat.isFile()) {
    console.error('Source is not a file');

    return;
  }

  try {
    const destStat = await fs.stat(dest);

    if (destStat.isDirectory()) {
      console.error('Destination is a directory');

      return;
    }
  } catch (err) {
    if (err.code !== 'ENOENT') {
      console.error('Error checking destination file');

      return;
    }
  }

  await fs.copyFile(src, dest);
}

copyFiles();
