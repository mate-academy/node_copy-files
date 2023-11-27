/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');

async function copyFile(sourcePath, destinationPath) {
  try {
    if (sourcePath === destinationPath) {
      console.error('You trying to copy at the same location');

      return;
    }

    const data = await fs.readFile(sourcePath);

    await fs.writeFile(destinationPath, data);

    console.log(`File copied from ${sourcePath} to ${destinationPath}`);
  } catch (error) {
    console.error('Error copying file:', error.message);
  }
}

copyFile(process.argv[2], process.argv[3]);
