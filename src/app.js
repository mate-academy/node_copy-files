/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [oldPath, newPath] = process.argv.slice(2);

oldPath !== newPath
  ? fs.copyFile(`${oldPath}`, `${newPath}`, callback)
  : console.log('Please, copy to file ti another location');

function callback(err) {
  if (err) {
    throw err;
  }

  console.log(`${oldPath} was copied to ${newPath}`);
}
