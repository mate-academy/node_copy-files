'use strict';

const fs = require('fs');

const copyFile = (file, copy) => {
  if (file === copy) {
    // eslint-disable-next-line no-console
    console.log('Error: Cant create copy with same name!');

    return;
  }

  try {
    fs.copyFileSync(file, copy);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

if (process.argv[2] === 'cp') {
  const [file, copy] = process.argv.slice(3);

  copyFile(file, copy);
}
