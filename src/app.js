'use strict';

/* eslint no-console: ["error", { allow: ["log"] }] */

const fs = require('fs');
const path = require('path');

const copy = () => {
  const args = process.argv.slice(2);
  const sourcePath = path.join(path.join(process.cwd()), args[0]);
  let destPath = path.join(path.join(process.cwd()), args[1]);

  if (destPath.includes(':')) {
    destPath = args[1];
  }

  const lastBackslachIndex = sourcePath.lastIndexOf('\\');
  const clearedSourcePath = sourcePath.slice(0, lastBackslachIndex + 1);
  const destPathWithFileName = destPath + sourcePath.slice(lastBackslachIndex);

  if (clearedSourcePath === destPath) {
    return;
  }

  fs.copyFile(sourcePath, destPathWithFileName, (err) => {
    if (err) {
      console.log('Error Found:', err);
    } else {
      console.log(`Successfully copied to ${destPathWithFileName}`);
    }
  });
};

copy();
