/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copyFile = (path1, path2) => {
  if (!path1 || !path2) {
    console.error('2 arguments are required');

    return;
  }

  if (path1 === path2) {
    console.error('Paths are equal');

    return;
  }

  try {
    if (fs.lstatSync(path1).isDirectory()) {
      console.error('Source is a directory');

      return;
    }

    if (!fs.existsSync(path1)) {
      console.error('Source does not exist');

      return;
    }

    if (fs.existsSync(path2) && fs.lstatSync(path2).isDirectory()) {
      console.error('Destination is a directory, only files are allowed');
    }

    fs.copyFileSync(path1, path2);
  } catch (error) {
    console.error('Error copying');
  }
};

copyFile(...process.argv.slice(2));
