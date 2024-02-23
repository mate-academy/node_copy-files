/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');

const copy = async(pathFrom, pathTo) => {
  try {
    if (pathFrom !== pathTo) {
      const content = await fs.readFile(pathFrom, 'utf8');

      await fs.writeFile(pathTo, content, 'utf8');
    }
  } catch (error) {
    console.error('Error occurred:', error);
  }
};

const [copyFrom, copyTo] = process.argv.slice(2);

copy(copyFrom, copyTo);
