/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copy = async(fromPath, toPath) => {
  if (fromPath === toPath) {
    throw new Error('The same path');
  }

  try {
    if (fs.existsSync(toPath)) {
      fs.copyFileSync(fromPath, toPath);
      console.log('Done');
    }
  } catch (error) {
    throw new Error('File doesn\'t exist');
  }
};

const [from, to] = process.argv.slice(2);

copy(from, to);
