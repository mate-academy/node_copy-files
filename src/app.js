'use strict';

const fs = require('fs');

function cpFile() {
  const [oldPath, newPath] = process.argv.slice(2);

  if (!oldPath || !newPath) {
    // eslint-disable-next-line no-console
    console.error('wrong');

    return;
  }

  if (oldPath === newPath) {
    // eslint-disable-next-line no-console
    console.error('wrong  to copy to the same location');

    return;
  }

  if (!fs.existsSync(oldPath)) {
    // eslint-disable-next-line no-console
    console.error('Source file does not exist');

    return;
  }

  if (!fs.statSync(oldPath).isFile()) {
    // eslint-disable-next-line no-console
    console.error('Source is not a file');

    return;
  }

  try {
    fs.cpSync(oldPath, newPath);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

cpFile();
