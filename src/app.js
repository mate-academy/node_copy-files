'use strict';

const { terminal } = require('./terminal');
const { copyFile } = require('./copyFile');

terminal.question(
  // eslint-disable-next-line max-len
  'Enter the command to copy the file.\nFor example, "cp file.txt file-copy.txt" ',
  copyFile,
);
