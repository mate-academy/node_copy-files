'use strict';

const { terminal } = require('./terminal.js');
const { copyFile } = require('./copyFile.js');

let from = '';
let to = '';

terminal.question('Copy from: ', (filePath) => {
  from = filePath;

  terminal.question('Copy to: ', (filePathTo) => {
    to = filePathTo;

    if (from === to) {
      terminal.close();
    } else {
      copyFile(from, to);
    }
  });
});
