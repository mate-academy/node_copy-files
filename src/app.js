'use strict';

/* eslint-disable no-console */

const fs = require('fs');

const [source, destination] = process.argv.slice(2);

fs.readFile(source, (err, content) => {
  if (err) {
    throw err;
  }

  console.log(content);

  if (source === destination) {
    console.log('Can not copy to the same location');

    return;
  }

  fs.writeFile(destination, content, (error, data) => {
    if (error) {
      throw error;
    }
    console.log('File copied');
  });
});
