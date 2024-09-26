/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');

const path = require('path');

const getCopyFile = async(source, destination) => {
  const sourcePath = path.resolve(source);
  const destPath = path.resolve(destination);

  if (sourcePath === destPath) {
    return;
  }

  try {
    await fs.copyFileSync(sourcePath, destPath);
    console.log(`'${sourcePath}' copied to '${destPath}' successfully.`);
  } catch (err) {
    console.log(`Error copying '${sourcePath}' to '${destPath}':
    ${err.message}`);
  }
};

module.exports = { getCopyFile };
