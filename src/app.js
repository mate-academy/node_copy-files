/* eslint-disable space-before-function-paren */
'use strict';

const prompt = require('prompt-sync')();
const colors = require('colors');
const fs = require('fs/promises');

colors.enable();

const copyFile = async (source, target) => {
  try {
    const copied = await fs.copyFile(source, target);

    // eslint-disable-next-line no-console
    console.log('File copied successfully'.green);

    return copied;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

const file = prompt('Enter the file source: ');
const copy = prompt('Enter the copy file path: ');

copyFile(file, copy);
