/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [command, from, to] = process.argv.slice(2);

console.log(from !== to);

if (command === 'copy' && from !== to) {
  fs.readFile(from, (error, fileData) => {
    if (error) {
      console.log(error);
    }

    fs.writeFile(to, fileData.toString(), (err) => {
      if (err) {
        console.error(err);

        return;
      }
      console.log('File copied');
    });
  });
}
