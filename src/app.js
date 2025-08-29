/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFile() {
  const args = process.argv.slice(2);
  const [source, destination] = args;

  if (source === destination) {
    console.error(
      // eslint-disable-next-line max-len
      'It must do nothing in case the user is trying to copy to the same location.',
    );

    process.exit(1);
  }

  if (!fs.existsSync(source)) {
    console.error('Source to file is not found');
    process.exit(1);
  }

  const stats = fs.statSync(source);

  if (!stats.isFile()) {
    console.error('It is not a file');
    process.exit(1);
  }

  fs.copyFileSync(source, destination);
  console.log('File copied');
}

copyFile();
