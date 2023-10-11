'use strict';

/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');

function copyFile(sourcePath, destinationPath) {
  const fileName = path.basename(sourcePath);

  fs.copyFileSync(sourcePath, path.join(destinationPath, fileName));

  console.log(`File '${fileName}' copied to '${destinationPath}'.`);
}

module.exports = { copyFile };
