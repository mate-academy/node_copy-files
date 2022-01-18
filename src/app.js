'use strict';

const fs = require('fs');

const [fileFrom, fileName] = process.argv.slice(2);

fs.copyFile(`${fileFrom}`, `./src/destination/${fileName}`, (error) => {
  // eslint-disable-next-line no-console
  console.log('compleat');

  if (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    // eslint-disable-next-line no-console
    console.log('Ви намагається скопіювати в те саме місце');
  }
});
