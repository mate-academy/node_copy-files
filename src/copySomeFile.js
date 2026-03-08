/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

function copySomeFile(srcFrom, destTo) {
  const srcPath = path.resolve(srcFrom);
  const destPath = path.resolve(destTo);

  if (srcPath === destPath) {
    console.log('Source and destination paths are the same. No action taken.');

    return;
  }

  if (!fs.existsSync(srcPath)) {
    console.error(`Source file does not exist: ${srcPath}`);

    return;
  }

  if (fs.lstatSync(srcPath).isDirectory()) {
    console.error(`Source path is a directory: ${srcPath}`);

    return;
  }

  if (fs.existsSync(destPath) && fs.lstatSync(destPath).isDirectory()) {
    console.error(`Destination path is a directory: ${destPath}`);

    return;
  }

  try {
    fs.copyFileSync(srcPath, destPath);
    console.log(`File copied successfully from ${srcPath} to ${destPath}`);
  } catch (err) {
    console.error(`Error copying file to ${destPath}:`, err);
  }
}

module.exports = {
  copySomeFile,
};
