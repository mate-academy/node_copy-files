/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const readline = require('readline');

let content = '';
let originalFile = '';
let copiedFile = '';

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const terminalHandler = () => {
  return new Promise((resolve) => {
    terminal.question('type command like `cp ./package.json ./file-copy.json`:\n',
      (command) => {
        const array = command.split(' ');

        originalFile = array[1];
        copiedFile = array[2];

        console.log(originalFile, copiedFile);
        resolve();
      });
  });
};

const readFile = () => {
  return new Promise((resolve) => {
    console.log('original file', originalFile);

    fs.readFile(originalFile, 'utf8', (err, data) => {
      if (err) {
        console.log(err);

        return;
      }

      console.log(data);
      content = data;
      resolve();
    });
  });
};

const writeFile = () => {
  return new Promise((resolve) => {
    fs.writeFile(`${copiedFile}`, content, (err) => {
      if (err) {
        throw new Error(err);
      }
      console.log('done');
    });
  });
};

(async() => {
  await terminalHandler();

  if (originalFile === copiedFile) {
    terminal.close();

    return;
  }

  await readFile();
  await writeFile();
  terminal.close();
})();

// node ./src/app.js
