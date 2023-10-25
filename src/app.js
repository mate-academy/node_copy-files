'use strict';

const fs = require('fs');

const [from, to] = process.argv.slice(2);

if (from === to) {
  throw new Error('It is the same file, need a different one');
}

fs.copyFile(from, to, (error) => {
  if (error) {
    throw error;
  }

  return 'Done';
});
