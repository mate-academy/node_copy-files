/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const fileNames = process.argv.slice(2);

function copyFile(...args) {
  if (args[0] === args[1]) {
    return;
  }

  if (args.length !== 2) {
    console.error('Wrong number of arguments');

    return;
  }

  if (!fs.existsSync(args[0])) {
    console.error(`It looks like the file doesn't exist`);

    return;
  }

  try {
    fs.writeFileSync(args[1], fs.readFileSync(args[0], 'utf-8'));
  } catch (error) {
    console.error(error);
  }
}

copyFile(...fileNames);
