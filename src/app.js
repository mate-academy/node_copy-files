/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [ sourceFile, fileCopy ] = process.argv.slice(2);

fs.copyFile(sourceFile, fileCopy, (err) => {
  if (err) {
    console.log('Oops! An Error Occured:', err);
  }
});
