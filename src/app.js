/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const params = process.argv.slice(2);

if (params.length !== 2) {
  console.log('Incorrect parameters');

  return;
}

if (params[1] !== params[0]) {
  const addressFile = path.join(__dirname, params[0]);
  const addressCopy = path.join(__dirname, params[1]);

  if (!fs.existsSync(addressCopy)) {
    try {
      const content = fs.readFileSync(addressFile, 'utf-8');

      fs.writeFileSync(addressCopy, content);
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log('File exists');
  }
} else {
  console.log('File exists');
}
