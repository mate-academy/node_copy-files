'use strict';

const fs = require('fs/promises');
const path = require('path');

async function copyFile(src, dest) {
  try {
    if (!src || !dest) {
      throw new Error('Source and destination paths are required.');
    }

    const absoluteSource = path.resolve(src);
    const absoluteDestination = path.resolve(dest);

    if (absoluteSource === absoluteDestination) {
      throw new Error('Source and destination paths cannot be the same.');
    }

    const sourceStats = await fs.stat(absoluteSource);

    if (!sourceStats.isFile()) {
      throw new Error('Only files can be copied.');
    }

    await fs.copyFile(absoluteSource, absoluteDestination);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error.message);
  }
}

const [, , source, destination] = process.argv;

copyFile(source, destination);
