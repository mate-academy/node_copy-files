/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copyFn = () => {
  const [pathFrom, pathTo] = process.argv.slice(2);

  try {
    if (pathFrom !== pathTo) {
      const file = fs.readFileSync(pathFrom, 'utf8');

      fs.writeFileSync(pathTo, file);
    }
  } catch (error) {
    console.error(error);
  }
};

copyFn();
