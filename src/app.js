'use strict';

const fs = require('fs');
const path = require('path');

function copyFile() {
  const pathes = process.argv.slice(2);

  const pathExample = path.join(__dirname, pathes[0]);

  const pathCopy = path.join(__dirname, pathes[1]);

  if (!fs.existsSync(pathExample)) {
    throw Error('Path is not valid');
  }

  if (pathes.length !== 2) {
    throw Error('Need exactly two path to files. Not more or not less');
  }

  if (pathCopy === pathExample) {
    throw Error('Path for copy same to path of exist file ');
  }

  const copy = fs.readFileSync(path.join(__dirname, pathes[0]), 'utf8');

  fs.writeFileSync(path.join(__dirname, pathes[1]), copy);
}
copyFile();
