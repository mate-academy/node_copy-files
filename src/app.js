'use strict';

const fs = require('fs');

const cp = (
  fileSrc = process.argv[2],
  fileDes = process.argv[3]
) => {
  if (fileSrc === fileDes) {
    throw new Error('Paths are the same!');
  }

  try {
    const copy = fs.readFileSync(fileSrc, { encoding: 'utf-8' });

    fs.writeFile(fileDes, copy);
  } catch (err) {
    console.error(err);
  }
};

cp();
