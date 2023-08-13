/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copyFile(sourcePath, destinationPath) {
  if (!sourcePath || !destinationPath) {
    console.log('usage: source_file target_file');

    return;
  }

  if (sourcePath === destinationPath) {
    console.log(
      `cp: ${sourcePath} and ${destinationPath} are identical (not copied).`,
    );

    return;
  }

  try {
    const content = fs.readFileSync(sourcePath);

    fs.writeFileSync(destinationPath, content);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log(`cp: ${sourcePath}: No such file or directory`);
    } else {
      console.log(error);
    }
  }
}

module.exports = { copyFile };
