'use strict';

const path = require('path');

const checkSamePath = (source, destination) => {
  if (!source || !destination) {
    global.console.log(
      'The source or destination does not exist',
    );

    process.exit();
  }

  if (path.resolve(source) === path.resolve(destination)) {
    global.console.log(
      'The source and destination are the same.',
    );

    return true;
  }

  return false;
};

module.exports = { checkSamePath };
