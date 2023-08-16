'use strict';

const fs = require('fs');
// const stream = require('stream/promises');

const copy = (from, to) => {
  try {
    const readStream = fs.createReadStream(from);

    const writeStream = fs.createWriteStream(to);

    const handleError = () => {
      readStream.destroy();
      writeStream.end('finish');
    };

    readStream
      .pipe(writeStream)
      .on('error', handleError);
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = { copy };
