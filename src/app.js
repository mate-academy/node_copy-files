/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copy = () => {
  const [src, dest] = process.argv.slice(2);

  if (!src || !dest) {
    console.error('Usage: node app.js <src> <dest>');

    return;
  }

  if (!fs.existsSync(src)) {
    console.error(`Source file does not exist: ${src}`);

    return;
  }

  const srcStats = fs.statSync(src);

  if (!srcStats.isFile()) {
    console.error(`Source must be a file: ${src}`);

    return;
  }

  if (fs.existsSync(dest)) {
    const destStats = fs.statSync(dest);

    if (destStats.isDirectory()) {
      console.error(`Destination cannot be a directory: ${dest}`);

      return;
    }
  }

  if (src === dest) {
    return;
  }

  const data = fs.readFileSync(src);

  try {
    fs.writeFileSync(dest, data);
    console.log(`File copied from ${src} to ${dest}`);
  } catch (err) {
    console.error(`Error writing to destination: ${err.message}`);
  }
};

copy();

module.exports = {
  copy,
};
