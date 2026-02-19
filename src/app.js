/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');
const path = require('node:path');

async function copyFiles() {
  const args = process.argv.slice(2);
  const [src, dest] = args;

  if (!src || !dest || args.length > 2) {
    console.error('Two arguments are required');

    return;
  }

  for (const arg of args) {
    if (arg.startsWith('-')) {
      console.error('Arguments should not start with a dash');

      return;
    }
  }

  if (path.resolve(src) === path.resolve(dest)) {
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

  try {
    await fs.copyFile(src, dest);
  } catch (err) {
    console.error('Error copying file:', err.message);
  }
}

copyFiles();
