'use strict';

const fs = require('fs');

const [source, destination] = process.argv.slice(2);

const copyFile = () => {
  if (source === destination) {
    throw Error('Can not copy with the same filename');
  }

  fs.cp(source, destination, (e) => {
    throw e;
  });
};

copyFile();
