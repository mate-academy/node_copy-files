'use strict';

const fs = require('fs');

function copyFile() {
  const pathFile = process.argv[2];
  const pathToCopy = process.argv[3];

  if (pathFile === pathToCopy) {
    throw Error('The file cannot be in the same location as the copy');
  }

  const isExistPathFile = fs.existsSync(pathFile);
  const isExistPathToCopy = fs.existsSync(pathToCopy);

  if (!isExistPathFile || !isExistPathToCopy) {
    // eslint-disable-next-line max-len
    throw Error('Check if the input is correct, please enter the existing paths for both files');
  }

  try {
    const data = fs.readFileSync(pathFile);
    fs.writeFileSync(pathToCopy, data);
    /* eslint-disable-next-line no-console */
    console.log('Copying was successful');
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.error(error);
  }
}

copyFile();
