'use strict';

const fs = require('fs/promises');

const copy = async(copyFrom, copyTo) => {
  try {
    if (copyFrom !== copyTo) {
      const content = await fs.readFile(copyFrom, 'utf8');
      fs.writeFile(copyTo, content, 'utf8');
    }
  } catch (error) {}

};

const [copyFrom, copyTo] = process.argv.slice(2);

copy(copyFrom, copyTo);
