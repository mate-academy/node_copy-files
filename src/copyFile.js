'use strict';

const fs = require('fs');

function copyFile(fileFromPath, fileToPath) {
  if (fileFromPath === fileToPath) {
    return;
  }

  try {
    const fileContent = fs.readFileSync(fileFromPath, 'utf8');

    fs.writeFileSync(fileToPath, fileContent);
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = { copyFile };
