'use strict';

const fs = require('node:fs');

/* eslint no-useless-escape: "warn" */

module.exports = {
  copyFile,
};

/**
 * @param {string} src
 * @param {string} dst
 * @returns {string[]} */
function copyFile(src, dst) {
  if (src === dst) {
    throw new Error('Source and destination are the same');
  }

  if (fs.existsSync(dst) && fs.lstatSync(dst).isDirectory()) {
    throw new Error('The path leads to the directory');
  }

  fs.copyFileSync(src, dst);

  return [src, dst];
}
