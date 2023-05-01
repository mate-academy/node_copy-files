'use strict';

const fs = require('fs').promises;

const [source, destination] = process.argv.slice(2);

const copyFile = async(src, dest) => {
  try {
    if (!src || !dest) {
      throw new Error('Some of path names are not specified');
    }

    if (src === dest) {
      throw new Error('Impossible to copy to same location');
    }

    await fs.copyFile(src, dest);

    console.log(`Copying completed from "${src}" to "${dest}"`);
  } catch (err) {
    console.error(`An error occurred: ${err.message}`);
  }
};

copyFile(source, destination);
