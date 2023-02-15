'use strict';

const fs = require('fs');

const [pathFromCopy, pathToCopy] = process.argv.slice(2);

function copyFile(pathFrom, pathTo) {
  if (pathFrom === pathTo) {
    return 'You can\' copy file with the same path';
  }

  try {
    const data = fs.readFileSync(pathFrom, 'utf-8');

    fs.writeFileSync(pathToCopy, data);
  } catch (error) {
    return 'Smt went worng';
  }
}

copyFile(pathFromCopy, pathToCopy);
