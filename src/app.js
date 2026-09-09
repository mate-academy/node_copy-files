/* eslint-disable no-console */
'use strict';

const { cp, stat } = require('fs/promises');

async function copyFile() {
  const [, , source, dest] = process.argv;

  if (!source || !dest) {
    console.error('Please provide both source and destination paths.');

    return;
  }

  if (source === dest) {
    return;
  }

  try {
    const stats = await stat(source);

    if (stats.isDirectory()) {
      console.error('Source path is a directory, not a file.');

      return;
    }

    try {
      await cp(source, dest);
    } catch (error) {
      console.error(`Error copying file: ${error.message}`);
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('Source file does not exist.');

      return;
    } else {
      console.error(error.message);
    }

    process.exit(0);
  }
}

copyFile();
