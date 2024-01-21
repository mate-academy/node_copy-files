'use strict';

const fs = require('fs');

const [, , file, fileToCopy] = process.argv;

fs.readFile(`./src/${file}`, 'utf-8', (error, data) => {
  if (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }

  fs.writeFile(`./src/${fileToCopy}`, data, (secondError) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log(secondError);
    }
  });
});
