'use strict';

const fs = require('fs');

function cp() {
  const [sourse, destination] = process.argv.slice(2);

  if (sourse === destination) {
    return;
  }

  if (!fs.existsSync(sourse)) {
    throw new Error('Error: sourse file does not exixt');
  }

  try {
    fs.copyFileSync(sourse, destination);
  } catch (error) {
    if (error.code === 'ERR_INVALID_ARG_TYPE') {
      throw new Error(`invalid destination directory`);
    }

    if (error.code === 'EPERM') {
      throw new Error(`unable copy "${sourse}" to "${destination}"`);
    }

    if (error.code === 'ENOENT') {
      throw new Error('destination directory does not exist');
    }
  }
}

cp();
