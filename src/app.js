/* eslint-disable no-console */
'use strict';

const fs = require('node:fs');

const source = process.argv[2];
const destination = process.argv[3];

function app(src, dest) {
  console.log('source', source);

  if (!src || !dest) {
    console.error('Please provide source and destination paths');

    return;
  }

  if (!fs.existsSync(src)) {
    console.error('Source file does not exist');

    return;
  }

  if (fs.existsSync(dest) && fs.statSync(dest).isDirectory()) {
    console.error('Destination is a directory');

    return;
  }

  if (fs.statSync(src).isDirectory()) {
    console.error('Source is a directory');

    return;
  }

  fs.cp(src, dest, { recursive: true }, (err) => {
    if (err) {
      console.error('Error', err);
    }

    try {
      fs.writeFileSync(dest, process.argv[4]);
      console.log('File copied successfully');
    } catch (error) {
      console.error('Error writing to destination file', error);
    }
  });
}

app(source, destination);
