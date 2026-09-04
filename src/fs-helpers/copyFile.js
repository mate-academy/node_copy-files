'use strict';

const fs = require('fs').promises;

const copyFile = async(source, destination) => {
  try {
    await fs.copyFile(source, destination);

    global.console.log(`${source} was copied to ${destination}`);
  } catch (error) {
    global.console.log(error);
  }
};

module.exports = { copyFile };
