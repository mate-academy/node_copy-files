'use strict';

const fs = require('fs');

const fileCopy = (file, copy) => {
  const content = fs.readFileSync(file);

  fs.writeFileSync(copy, content.toString());
};

fileCopy('file.txt', 'copyFile.txt');
