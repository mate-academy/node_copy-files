/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copy(path1, path2) {
  if (!path1 || !path2) {
    console.error(`2 arguments are required`);

    return;
  }

  if (!fs.existsSync(path1)) {
    console.error(`${path1} doesn't exist`);

    return;
  }

  if (fs.statSync(path1).isDirectory()) {
    console.error(`${path1} is a directory`);

    return;
  }

  if (fs.existsSync(path2) && fs.statSync(path2).isDirectory()) {
    console.error(`${path2} is a directory`);

    return;
  }

  if (path1 === path2) {
    console.error('Inputs are identical');

    return;
  }

  fs.copyFileSync(path1, path2);
}

copy(...process.argv.slice(2));
