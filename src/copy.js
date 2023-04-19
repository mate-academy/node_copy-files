/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copyFile = (fromPath, toPath) => {
  if (!fromPath || !toPath) {
    console.error(
      'Please make sure both paths is defined!',
    );

    return;
  }

  if (fromPath === toPath) {
    console.error('Cannot copy to the same location!');

    return;
  }

  if (!fs.existsSync(fromPath)) {
    console.error('Source file does not exist!');

    return;
  }

  try {
    fs.copyFileSync(fromPath, toPath);

    console.log(`Successfully copied from "${fromPath}" to "${toPath}"`);
  } catch (err) {
    console.error(
      `An error occurred while copying from "${fromPath}" to "${toPath}"`,
    );
  }
};

module.exports = { copyFile };
