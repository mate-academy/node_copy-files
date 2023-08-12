'use strict';

const fs = require('fs').promises;

const checkFileExists = async(filePath) => {
  try {
    await fs.access(filePath);

    return true;
  } catch (error) {
    return false;
  }
};

module.exports = { checkFileExists };
