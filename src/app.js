'use strict';

const fs = require('fs');

function copyFile() {
  const [path1, path2] = process.argv.slice(2);

  if (path1 === path2) {
    return;
  }

  try {
    const dataFile = fs.readFileSync(path1, 'utf-8');

    fs.writeFileSync(path2, dataFile);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
}

copyFile();
