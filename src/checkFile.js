'use strict';

const fs = require('fs/promises');

async function isFileAndExist(filePath) {
  try {
    const stats = await fs.stat(filePath);

    return stats.isFile();
  } catch (err) {
    if (err.code === 'ENOENT') {
      return false;
    }
    throw err;
  }
}

module.exports = { isFileAndExist };
