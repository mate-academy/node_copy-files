'use strict';

const fs = require('fs');
const path = require('path');

const [, , path1, path2] = process.argv;

if (!path1 || !path2) {
  /* eslint-disable no-console */

  console.error(new Error('Invalid arguments!'));
  process.exit();
}

const pathFrom = path.resolve(path1);
const pathTo = path.resolve(path2);

if (pathFrom === pathTo) {
  process.exit();
}

try {
  const sourceStat = fs.statSync(pathFrom);

  if (!sourceStat.isFile()) {
    throw new Error('Source is not a file');
  }

  if (fs.existsSync(pathTo)) {
    const destinationStat = fs.statSync(pathTo);

    if (!destinationStat.isFile()) {
      throw new Error('Source is not a file');
    }
  }

  const data = fs.readFileSync(pathFrom);

  fs.writeFileSync(pathTo, data);
} catch (error) {
  console.error(error);
}
