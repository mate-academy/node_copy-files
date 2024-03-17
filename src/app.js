/* eslint-disable no-console */
const fs = require('fs');

const copyFile = (source, destination) => {
  if (!source || !destination) {
    console.error('Should be 2 arguments.');

    return;
  }

  if (source === destination) {
    console.error('Source and destination are the same.');

    return;
  }

  if (!fs.existsSync(source)) {
    console.error('Source file does not exist.');

    return;
  }

  fs.copyFile(source, destination, (error) => {
    if (error) {
      console.error('Error copying file:', error);
    } else {
      console.log('File copied successfully.');
    }
  });
};

copyFile(process.argv[2], process.argv[3]);
