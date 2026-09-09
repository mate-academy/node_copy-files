/* eslint-disable no-console */
'use strict';

const fsp = require('fs/promises');

async function main() {
  const source = process.argv[2];
  const dest = process.argv[3];

  if (source !== dest) {
    try {
      await fsp.cp(source, dest);
    } catch (error) {
      console.error(error);
    }
  }
}

main();
