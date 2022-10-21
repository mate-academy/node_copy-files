/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [comName, sourse, destination] = process.argv.slice(2);

if (comName === 'copy') {

  if (sourse === destination) {
    console.log('You try copy to the same location');
    process.exit();
  }

  fs.readFile('./src/test.txt', 'utf8', (err, data) => {

    if (err) {
      console.log(err);

      return;
    }

    fs.writeFile('./src/test-copy.txt', data, () => {});
  });
} else {
  console.log('Wrong command name');
}
