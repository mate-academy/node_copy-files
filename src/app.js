'use strict';

const fs = require('fs');

function copyFiles() {
  const [source, destination] = process.argv.slice(2);

  try {
    if (source === destination) {
      return;
    }

    fs.copyFileSync(source, destination);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error.message);
  }
}

copyFiles();
