'use strict';

const fs = require('fs');

function createCopy() {
  const data = process.argv.slice(2);
  const original = data[0];
  const copy = data[1];

  if (original === copy) {
    return;
  }

  try {
    const info = fs.readFileSync(original);

    fs.writeFileSync(copy, info);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

createCopy();
