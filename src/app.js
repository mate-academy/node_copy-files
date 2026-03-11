/* eslint-disable no-console  */
'use strict';

const fs = require('fs/promises');
const path = require('path');

const copyMyFile = async () => {
  const [source, dest] = process.argv.slice(2);

  if (!source || !dest) {
    console.error('Source and destination paths are required');

    return;
  }

  if (path.resolve(source) === path.resolve(dest)) {
    return;
  }

  try {
    const stats = await fs.stat(source);

    if (!stats.isFile()) {
      console.error('Source is not a file');

      return;
    }

    await fs.copyFile(source, dest);
    console.log('File copied successfully!');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`File ${source} not found!`);
    } else {
      console.error(error.message);
    }
  }
};

copyMyFile();
