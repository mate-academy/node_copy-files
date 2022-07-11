/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const args = process.argv.slice(2);
const [fileLocation, newLocation] = args;
const fileName = fileLocation.split('/').pop();

const writeFile = (data) => {
  fs.writeFile(`${newLocation}/${fileName}`, data, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

fs.readFile(fileName, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    writeFile(data);
  }
});
