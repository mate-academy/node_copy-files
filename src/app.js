/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function copy(from, to) {
  const file = fs.readFileSync(from);

  fs.writeFileSync(to, file);
}

function app() {
  const args = process.argv.slice(2);

  if (args.length !== 2) {
    console.error('Expected 2 arguments');

    return;
  }

  const from = args[0];
  const to = args[1];

  if (path.resolve(from) === path.resolve(to)) {
    return;
  }

  try {
    const fr = fs.statSync(from);

    if (!fr.isFile()) {
      console.error(`Expected ${from} to be file`);

      return;
    }
  } catch (err) {
    console.error(`File doesn't exist: ${from}`);

    return;
  }

  try {
    const t = fs.statSync(to);

    if (t.isDirectory()) {
      console.error(`Expected ${to} to be file name`);

      return;
    }
  } catch (err) {
    if (err.code !== 'ENOENT') {
      throw err;
    }
  }

  copy(from, to);
}

if (require.main === module) {
  app();
}

module.exports = { app };
