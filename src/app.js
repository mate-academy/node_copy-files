'use strict';

const fs = require('fs');

const copyFunc = () => {
  try {
    if (process.argv[2] === 'cp') {
      const [file, copy] = process.argv.slice(3);

      fs.copyFileSync(file, copy);
    }
  } catch (err) {
    throw new Error('Error: cp: no such file or directory');
  }
};

copyFunc();
