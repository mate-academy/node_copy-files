'use strict';

const fs = require('fs');
const args = process.argv.slice(2);

if (args.length === 2) {
  const copyFromPath = args[0];
  const copyToPath = args[1];

  if (copyFromPath === copyToPath) {
    /* eslint-disable no-console */
    console.log('pathes are the same');

    return;
  }

  fs.readFile(copyFromPath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Reading file error:', err);
    } else {
      fs.writeFile(copyToPath, data, (error) => {
        if (error) {
          console.error('Writing file error:', err);
        } else {
          console.log('File was copied!');
        }
      });
    }
  });
} else {
  console.log('please enter two pathes');
}
