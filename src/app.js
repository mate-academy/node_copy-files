/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFile() {
  const args = process.argv.slice(2);
  const [source, destination] = args;

  if (!source || !destination) {
    console.error('Error: Both source and destination must be provided.');

    return;
    // process.exit(1);
  }

  if (source === destination) {
    console.error('Error: Source and destination are the same. Nothing to do.');

    return;
  }

  if (!fs.existsSync(source)) {
    console.error('Error: Source file does not exist.');

    return;
    // process.exit(1);
  }

  const sourceStats = fs.statSync(source);

  if (!sourceStats.isFile()) {
    console.error('Error: Source is not a file.');

    return;
    // process.exit(1);
  }

  if (fs.existsSync(destination)) {
    const destStats = fs.statSync(destination);

    if (destStats.isDirectory()) {
      console.error('Error: Destination is a directory.');

      return;
      // process.exit(1);
    }
  }

  try {
    fs.copyFileSync(source, destination);
    console.log('File copied successfully.');
  } catch (err) {
    console.error('Error while copying file:', err.message);

    // process.exit(1);
  }
}

copyFile();
