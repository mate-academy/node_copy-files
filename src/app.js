'use strict';

const fs = require('fs');

function copy(originalFilePath, copyFilePath) {
  if (originalFilePath === copyFilePath) {
    throw new Error('You are trying to copy data to an output file');
  }

  try {
    const content = fs.readFileSync(originalFilePath, 'UTF-8');

    fs.writeFileSync(copyFilePath, content, 'utf-8');
  } catch (copyError) {
    return copyError;
  }
}

const filesPathes = process.argv.slice(2);

copy(...filesPathes);
