'use strict';

const fs = require('fs');
const path = require('path');

const copyFile = (from, to) => {
  if (from === to) {
    return;
  }

  const absPathFrom = path.join(__dirname, from);
  const absPathTo = path.join(__dirname, to);

  if (!fs.existsSync(absPathFrom)) {
    throw new Error('The file does not exist!');
  }

  try {
    const dataInFile = fs.readFileSync(absPathFrom, 'utf-8');

    fs.writeFileSync(absPathTo, dataInFile);
  } catch (err) {
    throw new Error(err);
  }
};

copyFile('file.txt', 'copyFile.txt');
