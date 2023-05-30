'use strict';

const fs = require('fs');
const datas = process.argv.slice(2);

if (datas[0] === 'cp') {
  copyFile(datas[1], datas[2]);
}

function copyFile(file, copy) {
  try {
    const textFromFile = fs.readFileSync(`${file}`, 'utf8');

    fs.writeFileSync(`${copy}`, textFromFile);
  } catch (error) {
    throw new Error(error);
  }
}
