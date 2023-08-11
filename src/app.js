'use strict';

require('colors');

const fs = require('fs/promises');
const path = require('path');
const { notification } = require('./notifications');
const { getUserInput, closeInterface } = require('./getUserInput');
const { isFileAndExist } = require('./checkFile');

(async function copyFile() {
  while (true) {
    const prompt = await getUserInput('Enter your command: '.blue);
    const normalizedPrompt = prompt.replace(/\s+/g, ' ').trim().split(' ');

    if (normalizedPrompt.length !== 3) {
      notification.warning('You must enter a command and two files');
      continue;
    }

    const [command, sourceFile, destFile] = normalizedPrompt;

    const sourceAbsolutePath = path.resolve(sourceFile);
    const destAbsolutePath = path.resolve(destFile);

    if (sourceAbsolutePath === destAbsolutePath) {
      notification.warning(
        'Source and destination are the same. File not copied.',
      );
      continue;
    }

    if (command !== 'cp') {
      notification.warning('Invalid command');
      continue;
    }

    const sourceFileExists = await isFileAndExist(sourceAbsolutePath);

    if (!sourceFileExists) {
      notification.error('Source file does not exist');
      break;
    }

    const destFileExists = await isFileAndExist(destAbsolutePath);

    if (destFileExists) {
      notification.warning('Destination file already exists');
      continue;
    }

    try {
      await fs.copyFile(sourceAbsolutePath, destAbsolutePath);
      notification.success('File copied successfully');
      break;
    } catch (err) {
      notification.error(err.message);
      break;
    }
  }

  closeInterface();
})();
