/* eslint-disable no-console */
'use strict';

import fs from 'fs';

const [source, destination] = process.argv.slice(2);

try {
  if (source === destination) {
    process.exit(0);
  }

  fs.copyFileSync(source, destination);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
