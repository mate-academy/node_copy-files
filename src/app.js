/* eslint-disable no-console */
const fs = require('fs/promises');
const path = require('path');

async function copyFile(filesForCopy, pathToCopy) {
  try {
    if (path.resolve(filesForCopy) === path.resolve(pathToCopy)) {
      console.error('Soure and destination are the same. No action taken');

      return;
    }

    try {
      await fs.access(filesForCopy);
    } catch (err) {
      console.error('Source file does not exist', err.message);

      return;
    }

    await fs.copyFile(filesForCopy, pathToCopy);
    console.log(`File coplied from ${filesForCopy} to ${pathToCopy}`);
  } catch (err) {
    console.error('Error during file copy', err.message);
  }
}

const args = process.argv.slice(2);

const [sourceFile, destinationFile] = args;

if (args.length !== 2) {
  console.error('Usage: node app.js <source> <destination>');
}

copyFile(sourceFile, destinationFile);

module.exports = {
  copyFile,
};
