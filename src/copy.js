/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function copy(message) {
  rl.question(message, (userInput) => {
    const [commandName, originalFilePath, copyFilePath] = userInput.split(' ');

    if (commandName !== 'cp') {
      copy(`Wrong command name: "${commandName}"\n`);

      return;
    }

    if (originalFilePath === copyFilePath) {
      console.log(
        'Copying did not occur: source file and destination file are the same.'
      );
      rl.close();

      return;
    }

    if (!fs.existsSync(originalFilePath)) {
      copy(`The file with the path "${originalFilePath}" was not found\n`);

      return;
    }

    try {
      fs.copyFileSync(originalFilePath, copyFilePath);

      console.log('Copied');
    } catch (copyError) {
      console.log(copyError);
    }

    rl.close();
  });
}

module.exports = { copy };
