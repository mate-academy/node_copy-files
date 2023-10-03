/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFile(currentLocation, specifiedLocation) {
  if (currentLocation === specifiedLocation) {
    console.log('You trying to copy to the same location.');

    return;
  }

  const contentFromCurrentLocation = fs.readFileSync(currentLocation, 'utf-8');

  fs.writeFileSync(
    specifiedLocation,
    contentFromCurrentLocation,
    'utf-8',
    (err) => {
      if (err) {
        console.log(err);

        return;
      }

      return `File copied to ${specifiedLocation}`;
    }
  );
}

module.exports = {
  copyFile,
};
