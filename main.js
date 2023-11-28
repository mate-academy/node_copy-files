'use strict';

const { copyFile } = require('./src/copyFile.js');

const main = async() => {
  try {
    const [, , fromPath, toPath] = process.argv;

    copyFile(fromPath, toPath);
  } catch (e) {
    if (process.argv.length !== 4) {
      throw new Error('There is not enough arguments to proceed');
    }

    if (e.code === 'ENOENT') {
      throw new Error('No such directory!');
    }
  }
};

module.exports = { main };
