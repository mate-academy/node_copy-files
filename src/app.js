'use strict';

const fs = require('fs');

function copy() {
  if (process.argv.slice(2).length !== 2) {
    // eslint-disable-next-line no-console
    console.error('Потрібно 2 аргументи');

    return;
  }

  const [srcFile, destCopy] = process.argv.slice(2);

  if (srcFile === destCopy) {
    return;
  }

  if (!srcFile || !destCopy) {
    // eslint-disable-next-line no-console
    console.error('Аргументи є undefined');

    return;
  }

  if (!fs.existsSync(srcFile)) {
    // eslint-disable-next-line no-console
    console.error('Файл не існує');

    return;
  }

  const sourceStats = fs.statSync(srcFile);

  if (sourceStats.isDirectory()) {
    // eslint-disable-next-line no-console
    console.error('джерело є каталогом');

    return;
  }

  if (fs.existsSync(destCopy)) {
    const destStats = fs.statSync(destCopy);

    if (destStats.isDirectory()) {
      // eslint-disable-next-line no-console
      console.error('призначення є каталогом');

      return;
    }
  }

  try {
    fs.copyFileSync(srcFile, destCopy);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
}

copy();

module.exports = copy;
