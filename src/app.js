/* eslint-disable no-console */
'use strict';


const fs = require('fs');

(() => {
  const args = process.argv.slice(2);
  const [command, sourcePath, destinationPath] = args;

  if (command !== 'cp') {
    console.log('Error: command not found');

    return;
  }

  if (!sourcePath || !destinationPath) {
    console.log('usage: cp source_file target_file');

    return;
  }

  copyFile(sourcePath, destinationPath);
})();

function copyFile(sourcePath, destinationPath) {
  if (sourcePath === destinationPath) {
    console.log(
      `cp: ${sourcePath} and ${destinationPath} are identical (not copied).`,
    );

    return;
  }

  try {
    const content = fs.readFileSync(sourcePath, 'utf8');

    fs.writeFileSync(destinationPath, content);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log(`cp: ${sourcePath}: No such file or directory`);
    } else {
      console.log(error);
    }
  }
}
