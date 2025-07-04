'use strict';

const fs = require('fs');
const params = process.argv.slice(2);

const makeCopy = (sourcePath, destinationPath) => {
  if (sourcePath === destinationPath) {
    // eslint-disable-next-line no-console
    console.error('That is the same route');
  }

  try {
    fs.copyFileSync(sourcePath, destinationPath);
    // eslint-disable-next-line no-console
    console.log('Success!');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};

module.exports = { makeCopy };

makeCopy(params[0], params[1]);
