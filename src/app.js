'use strict';

const fs = require('fs');

function copyFile() {
  const cp = process.argv[2];
  const pathFile = process.argv[3];
  const pathToCopy = process.argv[4];

  if (pathFile === pathToCopy) {
    throw Error('The file cannot be in the same location as the copy');
  }

  const isExistPathFile = fs.existsSync(pathFile);
  const isExistPathToCopy = fs.existsSync(pathToCopy);

  if (!isExistPathFile || !isExistPathToCopy) {
    // eslint-disable-next-line max-len
    throw Error('Check if the input is correct, please enter the existing paths for both files');
  }

  if (cp === 'cp') {
    try {
      const data = fs.readFileSync(pathFile);

      fs.writeFileSync(pathToCopy, data);
      /* eslint-disable-next-line no-console */
      console.log('Сopying was successful');
    } catch (error) {
      /* eslint-disable-next-line no-console */
      console.error(error);
    }
  } else {
    /* eslint-disable-next-line no-console */
    console.error('Enter the correct method, such as "cp"');
  }
};

copyFile();
