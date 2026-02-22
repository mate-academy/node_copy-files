/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [source, dest] = process.argv.slice(2);

if (!source || !dest) {
  console.error('Error: parameters are invalid');
} else if (source !== dest) {
  fs.copyFile(source, dest, (error) => {
    if (error) {
      console.error(error);

      return;
    }

    console.log('Success');
  });
}
