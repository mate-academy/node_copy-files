'use strict';

const fs = require('fs');
const path = require('path');
const args = process.argv.slice(2);

function App(original, copy) {
  if (args.length !== 2) {
    return;
  }

  if (!original || !copy) {
    // eslint-disable-next-line no-console
    console.error('Both source and destination paths must be provided');

    return;
  }

  if (path.resolve(original) === path.resolve(copy)) {
    return;
  }

  try {
    const stats = fs.statSync(original);

    if (!stats.isFile()) {
      // eslint-disable-next-line no-console
      console.error('Source must be a file');

      return;
    }

    if (fs.existsSync(copy) && fs.statSync(copy).isDirectory()) {
      // eslint-disable-next-line no-console
      console.error('Destination cannot be a directory');

      return;
    }

    fs.copyFileSync(original, copy);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err.message);
  }
}

if (args.length === 2) {
  App(args[0], args[1]);
} else {
  // eslint-disable-next-line no-console
  console.error('You need to pass 2 arguments!');
}

module.exports = { App };
