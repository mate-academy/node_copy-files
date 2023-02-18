/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');
const readline = require('node:readline/promises');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function copyFile() {
  const userInput = await terminal.question(
    'To copy file enter data in format \'cp sourceFile destFile\': '
  );

  terminal.close();

  const [command, sourceFile, destFile] = userInput.split(' ');

  if (command !== 'cp') {
    console.log(`Wrong command: '${command}'. Command should be 'cp'`);

    return;
  }

  if (sourceFile === destFile) {
    console.log('Source and destination paths are the same');

    return;
  }

  try {
    await fs.access(sourceFile);
  } catch (err) {
    console.log(`File '${sourceFile}' does not exist`);

    return;
  }

  try {
    await fs.copyFile(sourceFile, destFile);

    console.log('File copied successfully');
  } catch (err) {
    console.error('Error: ', err);
  }
}

module.exports = { copyFile };
