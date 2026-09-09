/* eslint-disable no-console */
'use strict';

const { cp, stat } = require('fs/promises');

async function copyFile() {
  const [, , source, dest] = process.argv;

  if (!source || !dest) {
    console.error('Please provide both source and destination paths.');
    process.exit(1);
  }

  if (source === dest) {
    process.exit(0);
  }

  try {
    const stats = await stat(source);

    if (stats.isDirectory()) {
      console.error('Source path is a directory, not a file.');
      process.exit(1);
    }

    await cp(source, dest);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('Source file does not exist.');
    } else {
      console.error(error.message);
    }

    process.exit(1);
  }
}

copyFile();
