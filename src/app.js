'use strict';

const fs = require('fs');

const [from, to] = process.argv.slice(2);

if (from !== to) {
  try {
    const file = fs.readFileSync(from, 'utf-8');

    fs.writeFileSync(to, file);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}
