/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [sourse, destination] = process.argv.slice(2);

if (!sourse || !destination) {
  console.log('You don\'t have on of path');
  process.exit();
}

if (sourse === destination) {
  console.log('You writed the same path');
  process.exit();
}

if (!fs.existsSync(sourse)) {
  console.log('The path of sourse specify incorrectly');
  process.exit();
}

if (fs.existsSync(destination)) {
  console.log('It\'s already exists');
  process.exit();
}

fs.readFile(sourse, 'utf-8', (error, data) => {
  if (error) {
    console.log('Error');
    process.exit();
  } else {
    fs.writeFile(destination, data, 'utf-8', (errorWrite) => {
      if (errorWrite) {
        console.log('Error');
      } else {
        console.log('Sucess');
      }
    });
  }
});
