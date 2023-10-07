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
      const response = await fs.readFile(currPath, 'utf-8');

      await fs.writeFile(newPath, response);
    } catch {
      console.log(error);
    }
  }
};

if (operation === 'cp') {
  cp();
} else {
  console.log('No such operation');
};
