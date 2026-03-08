/* eslint-disable no-console */
'use strict';

const { copySomeFile } = require('./copySomeFile');

function app(argv = process.argv) {
  const args = argv.slice(2);

  if (args.length < 2) {
    console.error('Error: Both source and destination paths are required');

    return;
  }

  const [src, dest] = args;

  copySomeFile(src, dest);
}

if (require.main === module) {
  app();
}

module.exports = {
  app,
};
