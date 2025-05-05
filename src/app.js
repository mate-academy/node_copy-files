/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

const fs = require('fs');

async function copyFile() {
  const [source, destination] = process.argv.slice(2);

  if (!source || !destination) {
    console.error(
      'Invalid command. Please provide exactly 2 arguments: <source> <destination>',
    );

    return;
  }

  if (source === destination) {
    console.error('Source and destination cannot be the same.');

    return;
  }

  try {
    await fs.promises.copyFile(source, destination);
    console.log(`File copied from ${source} to ${destination}`);
  } catch (error) {
    console.error(`Error copying file: ${error.message}`);
  }
}

copyFile();
