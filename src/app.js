'use strict';

const fs = require('fs');

const copyFile = () => {
  try {
    if (process.argv[2] === 'cp') {
      const [file, copy] = process.argv.slice(3);

      fs.copyFileSync(file, copy);
    }
  } catch (error) {
    throw new Error(error);
  }
};

copyFile();
