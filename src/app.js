'use strict';

const { terminal } = require('./terminal.js');
const { operationProcessing } = require('./operationProcessing');

// eslint-disable-next-line max-len
terminal.question(`Specify which file and where to copy in the format like below:
   "cp file.txt file-copy.txt": `, operationProcessing);
