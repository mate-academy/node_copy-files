'use strict';

const fs = require('node:fs');
const path = require('node:path');

function copyFile() {
  const argvs = process.argv.slice(2);

  if (argvs.length === 0) {
    // eslint-disable-next-line
    console.error('no arguments was provided');

    return;
  }

  if (argvs.length === 1) {
    // eslint-disable-next-line
    console.error('only one argument was found');

    return;
  }

  const oldPath = path.resolve(argvs[0]);
  const newPath = path.resolve(argvs[1]);

  if (oldPath === newPath) {
    return;
  }

  try {
    fs.copyFileSync(oldPath, newPath);

    // eslint-disable-next-line
    console.log('File copied successfully!');
  } catch (err) {
    const errorTypes = {
      ENOENT: 'No such file or directory',
      EPERM: 'Permission denied',
      EISDIR: 'Cannot copy a directory',
    };

    const message = errorTypes[err.code] || `Unexpected error: ${err.message}`;

    // eslint-disable-next-line
    console.error(message);
  }
}

copyFile();

module.exports = {
  copyFile,
};
