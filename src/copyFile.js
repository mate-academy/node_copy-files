/* eslint-disable no-console */
'use strict';

const { checkPath } = require('./checkPath.js');
const fs = require('fs');
const path = require('path');

const validateNewName = (fileName) => {
  // eslint-disable-next-line max-len
  const validationExpression = /^[a-zA-Z0-9](?:[a-zA-Z0-9 ._-]*[a-zA-Z0-9])?\.[a-zA-Z0-9_-]+$/;

  return validationExpression.test(fileName);
};

async function copyFile(from, to) {
  try {
    const dirFrom = path.dirname(from);
    const dirTo = path.dirname(to);
    const nameTo = path.basename(to);
    const isNewNameValid = validateNewName(nameTo);

    const isValidFrom = await checkPath(from, 'from');

    if (isValidFrom === 'error from') {
      return 'way from doesn\'t exist';
    }

    const isValidTo = await checkPath(dirTo, 'to');

    if (isValidTo === 'error to') {
      return 'way to doesn\'t exist';
    }

    if (dirFrom === dirTo) {
      console.log('unable to copy to the same directory');

      return 'unable to copy to the same directory';
    }

    if (!isNewNameValid) {
      console.log('Not valid name of new file');

      return 'not valid name of new file';
    }

    const isFileWithCopyNameExist = await checkPath(to, 'check');

    if (typeof isFileWithCopyNameExist === 'string') {
      console.log('cann\'t copy to the name that already exist');

      return 'cann\'t copy to the name that already exist';
    }

    const data = fs.readFileSync(from);

    fs.writeFileSync(to, data);

    console.log('operation success');

    return 'operation success';
  } catch (error) {
    console.log(error.code);
  }
}

module.exports = { copyFile };
