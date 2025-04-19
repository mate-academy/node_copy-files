/* eslint-disable no-console */
'use strict';

const fs = require('node:fs');

function copyFiles() {
  const args = process.argv.slice(2);

  if (args.length !== 2) {
    console.error('You must enter only 2 arguments');

    return;
  }

  if (args[0] === args[1]) {
    console.error('Your files are identical');

    return;
  }

  if (!fs.existsSync(args[0])) {
    console.error('There is no such file');

    return;
  }

  const statsSource = fs.statSync(args[0]);

  if (statsSource.isDirectory()) {
    console.error('Enter file-source, not directory!');

    return;
  }

  if (fs.existsSync(args[1])) {
    const statsDestination = fs.statSync(args[1]);

    if (statsDestination.isDirectory()) {
      console.error('Enter file-destination, not directory!');

      return;
    }
  }

  const content = fs.readFileSync(args[0], 'utf-8');

  fs.writeFileSync(args[1], content);
}

copyFiles();
