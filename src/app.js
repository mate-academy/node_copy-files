'use strict';

const fs = require('fs');

const [source, dest] = process.argv.slice(2);

const copyFile = () => {
  if (source === dest) {
    throw Error('Can not copy with the same filename');
  }

  fs.cp(source, dest, () => {});
};

copyFile();
