/* eslint-disable no-console */
'use strict';
import fs from 'fs';

const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error('Usage: node app.js <source> <destination>');
  process.exit(0);
}

const [source, destination] = args;

if (source === destination) {
  console.error('Source and destination are the same. No action taken.');
  process.exit(0);
}

try {
  const sourceStats = fs.statSync(source);

  if (!sourceStats.isFile()) {
    console.error('Source is not a file.');
    process.exit(0);
  }

  const destinationStats =
    fs.existsSync(destination) && fs.statSync(destination);

  if (destinationStats && destinationStats.isDirectory()) {
    console.error('Destination is a directory.');
    process.exit(0);
  }

  fs.copyFile(source, destination, (err) => {
    if (err) {
      console.error(err);
    }
    console.log(`File copied from ${source} to ${destination}`);
  });
} catch (error) {
  console.error(error.message);
}
