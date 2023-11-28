/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copy = (sourse, newPath) => {
  if (sourse === newPath) {
    console.log('you trying to copy file to the same location');

    return;
  }

  try {
    const fileContent = fs.readFileSync(sourse);

    fs.writeFileSync(newPath, fileContent);
  } catch (err) {
    console.log(err);
  }
};

copy('file.txt', 'file-copy.txt');
