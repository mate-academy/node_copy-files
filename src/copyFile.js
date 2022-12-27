'use strict';

const { copyFileSync } = require('fs');

function copyFile(src, dest) {
  if (src === dest) {
    return;
  }

  try {
    copyFileSync(src, dest);
    process.stdout.write(`${src} was copied to ${dest}`);
  } catch (err) {
    process.stdout.write(err.toString());
  }
}

module.exports.copyFile = copyFile;
