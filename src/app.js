'use strict';

const fs = require('fs/promises');

const operation = process.argv[2];

const cp = async () => {
  const currPath = process.argv[3];
  const newPath = process.argv[4];

  if (currPath === newPath) {
    console.log('Pathes are same');
  } else {
    try {
      await fs.cp(currPath, newPath);
    } catch {
      console.log('Error');
    }
  }
};

if (operation === 'cp') {
  cp();
} else {
  console.log('No such operation');
};
