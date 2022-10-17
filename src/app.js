/* eslint-disable no-console */
'use strict';

const fs = require('fs');

// fs.copyFile('./src/file.txt', './src/new_file.txt', error => {
//   if (error) {
//     throw error('There is not file in this directory');
//   }
//    console.log('File was coppied succesfull');
// });

const [prev, next] = process.argv.slice(2);

if (prev === next) {
  console.log('Can`t copy to the exact location');

  return;
}

fs.readFile(prev, 'utf-8', (errorRead, data) => {
  if (errorRead) {
    console.log(errorRead);

    return;
  }

  fs.writeFile(next, data, 'utf-8', errorWrite => {
    if (errorWrite) {
      console.log(errorWrite);

      return;
    }

    console.log('File was coppied succesfully');
  });
});
