/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [argv1, argv2] = process.argv.slice(2);

async function copyFiles(source, destination) {
  try {
    const data = await fs.readFileSync(source, 'utf-8');

    if (data) {
      fs.writeFileSync(destination, data);
    }
  } catch (e) {
    console.warn('something goes wrong(((');
  }
}

if (argv1 !== argv2) {
  copyFiles(argv1, argv2);
} else {
  console.warn('source path and destination path must be different');
}
