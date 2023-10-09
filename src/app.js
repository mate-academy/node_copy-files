/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFile(currentLocation, specifiedLocation) {
  if (currentLocation === specifiedLocation) {
    console.log('You trying to copy to the same location.');

    return;
  }

  fs.readFile(currentLocation, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);

      return;
    }

    fs.writeFile(specifiedLocation, data, 'utf-8', (error) => {
      if (error) {
        console.log(error);

        return;
      }

      console.log(`File copied to ${specifiedLocation}`);
    });
  });
}

module.exports = {
  copyFile,
};
