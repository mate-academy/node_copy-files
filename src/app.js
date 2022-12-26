/* eslint-disable no-console */
'use strict';

const { copyFile } = require('fs');

const args = process.argv.slice(2);

copyFile(args[0], args[1], () => {
  console.log('ok');
});
