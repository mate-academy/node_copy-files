/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const path = require('path');

function getCopyFile(source, destination) {
  const sourcePath = path.resolve(source);
  const destPath = path.resolve(destination);

  if (sourcePath === destPath) {
    console.log('Source and destination are the same.');

    return;
  }

  if (!fs.existsSync(sourcePath)) {
    console.log(`Source file '${sourcePath}' does not exist.`);

    return;
  }

  try {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`'${sourcePath}' copied to '${destPath}' successfully.`);
  } catch (err) {
    console.log(`Error copying '${sourcePath}' to '${destPath}':
    ${err.message}`);
  }
}

module.exports = { getCopyFile };
