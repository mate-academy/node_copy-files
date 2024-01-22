/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copy = async(fromPath, toPath) => {
  if (fromPath === toPath) {
    throw new Error('The same path');
  }

  try {
    const content = await fs.readFileSync(fromPath, 'utf-8');

    fs.writeFileSync(toPath, content);
    console.log('Done');
  } catch (error) {
    throw new Error(error);
  }
};

const [from, to] = process.argv.slice(2);

console.log(from, to);

copy(from, to);
