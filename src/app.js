/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function app() {
  if (process.argv.length < 4) {
    console.error('Not enough args');

    return;
  }

  const [from, to] = process.argv.slice(2, 4);

  if (from === to) {
    return;
  }

  if (!fs.existsSync(from)) {
    console.error('DoesntExist');

    return;
  }

  if (fs.lstatSync(from).isDirectory()) {
    console.error('SourceIsDir');

    return;
  }

  const toDir = path.dirname(to);

  if (!fs.existsSync(toDir)) {
    fs.mkdirSync(toDir, { recursive: true });
  }

  if (fs.existsSync(to) && fs.lstatSync(to).isDirectory()) {
    console.error('Destination path is a directory.');

    return;
  }

  fs.copyFileSync(from, to);
}

app();
