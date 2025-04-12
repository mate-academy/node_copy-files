/* eslint-disable no-console */
'use strict';

const fs = require('node:fs');
const path = require('node:path');

const commands = process.argv.slice(2);
const [filePath, destinationPath] = commands;

if (conditionsCheck()) {
  copyFile(filePath, destinationPath);
}

function conditionsCheck() {
  if (commands.length < 2) {
    console.error(`Check arguments in comand line`);

    return false;
  } else if (isDirectory(filePath)) {
    console.error(`Source is a directory!`);

    return false;
  } else if (filePath === destinationPath) {
    console.error(`Source equal to Destination!`);

    return false;
  } else if (!fs.existsSync(path.dirname(destinationPath))) {
    console.error(`Destination directory does not exist!`);

    return false;
  }

  return true;
}

function isDirectory(somePath) {
  try {
    const stats = fs.statSync(somePath);

    return stats.isDirectory();
  } catch (err) {
    console.error(err.message);

    return false;
  }
}

function copyFile(pathFrom, pathTo) {
  if (fs.existsSync(pathFrom)) {
    try {
      const fileData = fs.readFileSync(pathFrom);

      fs.writeFileSync(pathTo, fileData);
      console.log('File copied successfully!');
    } catch (error) {
      console.error(
        `Error occurred while trying to copy a file: ${error.message}`,
      );
    }
  } else {
    console.error('Wrong path to file');
  }
}
