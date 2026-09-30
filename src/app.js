/* eslint-disable no-console */
'use strict';

import fs from 'node:fs';

const [from, dest] = process.argv.slice(2);

function main() {
  if (from === dest) {
    return;
  }

  try {
    fs.cpSync(from, dest);
  } catch (error) {
    console.error(error);
  }
}

main();
