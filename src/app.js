/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copyFile = () => {
  const params = process.argv.slice(2);
  let data;

  if (params.length < 2) {
    console.error('There are only one argument provided');
  }

  if (params[0] === params[1]) {
    return;
  }

  try {
    data = fs.readFileSync(params[0], 'utf-8');
  } catch (err) {
    console.error(err);
  }

  try {
    fs.writeFileSync(params[1], data);
  } catch (err) {
    console.error(err);
  }
};

copyFile();
