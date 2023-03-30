'use strict';
/* eslint-disable no-console */

const { cli } = require('./cli');
const fs = require('fs');

let pathFrom = '';
let pathTo = '';

const makeCopy = (from, to) => {
  if (from === to) {
    console.log('\u001b[34m You trying to copy to the same location');
  } else {
    fs.copyFile(from, to, err => {
      if (err) {
        console.log(err);
      }

      console.log('\u001b[32m Your file copied');
    });
  }

  cli.close();
};

cli.question('Copy file from: ', (from) => {
  pathFrom = from;

  cli.question('Copy file to: ', (to) => {
    pathTo = to;
    makeCopy(pathFrom, pathTo);
  });
});
