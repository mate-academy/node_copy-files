/* eslint-disable no-console */
'use strict';

const { realpath } = require('fs/promises');

async function checkPath(pathFrom, from) {
  try {
    const pathCheck = await realpath(pathFrom);

    return pathCheck;
  } catch (error) {
    if (from === 'from') {
      console.log(error.code, 'on copied from path');

      return 'error from';
    } else if (from === 'to') {
      console.log(error.code, 'on copied to path');

      return 'error to';
    }
  }
}

module.exports = { checkPath };
