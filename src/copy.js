'use strict';

const fs = require('fs');

const copy = (fileName, fileToCopy) => {
  if (fileName === fileToCopy) {
    throw new Error('Files have the same names');
  }

  try {
    const data = fs.readFileSync(fileName, 'utf-8');

    fs.writeFileSync(fileToCopy, data, 'utf-8');
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { copy };
