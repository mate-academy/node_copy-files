/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [,, operation, file, copy] = process.argv;

if (operation === 'cp' && file !== copy) {
  fs.readFile(`./src/${file}`, 'utf-8', (_, data) => {
    fs.writeFile(`./src/${copy}`, data, () => {});
  });
};
