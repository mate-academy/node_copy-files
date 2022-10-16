/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const operation = process.argv[2];
const copyFrom = process.argv[3];
const copyTo = process.argv[4];

if (operation === 'cp' && copyFrom !== copyTo) {
  try {
    const content = fs.readFileSync(copyFrom);

    fs.writeFile(copyTo, content, (err) => {
      if (err) {
        console.log(err);
      }
    });
  } catch (err) {
    console.log(err);
  }
} else {
  operation !== 'cp' && console.log('Error: Type right operation');
}
