'use strict';

const fs = require('fs');
const fileSource = process.argv.slice(2);

if (fileSource[0] === 'cp') {
  fs.copyFile(`./${fileSource[1]}`, `${fileSource[2]}`, (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(`File not found ${fileSource[1]}`);

      return;
    }

    // eslint-disable-next-line no-console
    console.log('File copied');
  });
}
