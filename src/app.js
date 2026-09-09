'use strict';

const fs = require('fs');

function copyFiles(source, destination) {
  if (!source) {
    // eslint-disable-next-line no-console
    console.error('No source provided');

    return;
  }

  if (!destination) {
    // eslint-disable-next-line no-console
    console.error('No destination provided');

    return;
  }

  fs.cp(source, destination, (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  });
}

copyFiles(...process.argv.slice(2, 4));
