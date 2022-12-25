/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copyFiles = (path, copyPath) => {
  if (path === copyPath) {
    return;
  }

  // simple way: fs.copyFileSync(path, copyPath);

  // another way by readFile and writeFile methods:
  const text = fs.readFileSync(path, 'utf-8', (error, data) => {
    if (error) {
      return;
    }

    return data;
  });

  try {
    fs.writeFileSync(copyPath, text);
  } catch (err) {
    return err;
  }

  console.log('Copied file content:\n',
    fs.readFileSync(copyPath, 'utf8'));
};

module.exports.copyFiles = copyFiles;
