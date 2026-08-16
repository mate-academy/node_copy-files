'use strict';

const fs = require('node:fs');

function main(from, to) {
  if (!from || !to) {
    // eslint-disable-next-line no-console
    console.error('Two file paths are required');

    return;
  }

  if (from === to) {
    return;
  }

  fs.cp(from, to, (error) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.error(error.message);
    }
  });
}

const params = process.argv.slice(2);

const fileFrom = params[0];
const fileTo = params[1];

main(fileFrom, fileTo);
