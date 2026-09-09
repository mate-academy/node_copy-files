/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');

async function copy(oldPath, newPath) {
  if (!oldPath || !newPath) {
    console.error('Source and destination file paths are required');
  }

  try {
    let srcRealPath;
    let destRealPath;

    try {
      srcRealPath = await fs.realpath(oldPath);
    } catch (err) {
      console.error('Copy error:', err.message);
      throw err;
    }

    try {
      destRealPath = await fs.realpath(newPath);
    } catch {
      destRealPath = null;
    }

    if (destRealPath && srcRealPath === destRealPath) {
      return;
    }

    const srcStats = await fs.stat(oldPath);

    if (!srcStats.isFile()) {
      console.error('Source is not a regular file');
    }

    if (destRealPath) {
      const destStats = await fs.stat(newPath);

      if (destStats.isDirectory()) {
        console.error('Destination is a directory');
        throw new Error('Destination is a directory');
      }
    }

    await fs.copyFile(oldPath, newPath);
  } catch (err) {
    console.error('Copy error:', err.message);
  }
}

if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length !== 2) {
    console.error('Exactly two positional arguments required');
  }

  const [oldPath, newPath] = args;

  copy(oldPath, newPath).catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = {
  copy,
};
