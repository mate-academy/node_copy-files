'use strict';

const fs = require('fs');
const path = require('path');

const copy = (pthFrom, pthTo) => {
  const pathFrom = path.join(__dirname, pthFrom);
  const pathTo = path.join(__dirname, pthTo);

  if (pthFrom === pthTo) {
    throw new Error('You are trying to copy the same file');
  }

  const fileToCopy = fs.readFileSync(pathFrom, 'utf8');

  fs.writeFileSync(pathTo, fileToCopy);
};

copy('testFrom.txt', 'testTo.txt');
