/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copy = () => {
  const args = process.argv.splice(2);
  const [source, dest] = args;

  if (!source || !dest) {
    throw new Error('File name and file copy name are required');
  } else if (source === dest) {
    throw new Error('Can\'t copy in the same file');
  }

  try {
    const data = fs.readFileSync(source);

    fs.writeFileSync(dest, data);
  } catch (e) {
    console.error(e);
  };
};

copy();
