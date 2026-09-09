/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

function copy() {
  const [, , source, destination] = process.argv;

  if (!source || !destination) {
    console.error('Need a source file and a destination file.');

    return;
  }

  const sourcePath = path.resolve(source);
  const destinationPath = path.resolve(destination);

  try {
    if (sourcePath === destinationPath) {
      console.error('Source and destination cannot be the same.');

      return;
    }

    if (!fs.existsSync(sourcePath)) {
      console.error(`Source file does not exist.`);

      return;
    }

    if (!fs.statSync(sourcePath).isFile()) {
      console.error(`"${source}" is not a file.`);

      return;
    }

    if (
      fs.existsSync(destinationPath) &&
      fs.statSync(destinationPath).isDirectory()
    ) {
      console.error('Destination cannot be a directory.');

      return;
    }

    fs.copyFileSync(sourcePath, destinationPath);
  } catch (error) {
    console.error(error);
  }
}

copy();
