/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const copy = () => {
  const args = process.argv.splice(2);
  const [source, dest] = args;

  if (!source || !dest) {
    throw new Error('File name and file copy name are required');
  } else if (source === dest) {
    throw new Error('Can\'t copy in the same file');
  }

  try {
    const data = fs.readFileSync(path.join(__dirname, source), 'utf8');

    fs.writeFileSync(path.join(__dirname, dest), data, 'utf8');
  } catch (e) {
    console.error(e);
  };
};

copy();
