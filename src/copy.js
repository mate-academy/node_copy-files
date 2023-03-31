/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copyFile = (fromPath, toPath) => {
  if (!fs.existsSync(fromPath)) {
    console.error('Source file does not exist!');

    return;
  }

  fs.copyFileSync(fromPath, toPath);

  console.log(`Successfully copied from "${fromPath}" to "${toPath}"`);
};

module.exports = { copyFile };
