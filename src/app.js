/* eslint-disable no-console */
'use strict';

const { copyFile, existsSync } = require('fs');

const COPY = 'COPY';

const ERROR = {
  SAME_LOCATION: 'Cannot be copied to the same location',
  NOT_EXIST: 'File does not exist',
};

const [command, sourse, destination] = process.argv.slice(2);

const isExistsFile = (path) => {
  return existsSync(path);
};

const copyFileToOtherLocation = () => {
  if (isExistsFile(sourse)) {
    copyFile(sourse, destination, (err) => {
      if (err) {
        throw err;
      }

      console.log(`${sourse} was copied to ${destination}`);
    });
  } else {
    console.log(ERROR.NOT_EXIST);
    process.exit();
  }
};

if (command.toLocaleUpperCase() === COPY) {
  if (sourse === destination) {
    console.log(ERROR.SAME_LOCATION);
    process.exit();
  }

  copyFileToOtherLocation();
}
