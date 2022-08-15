/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const readLine = require('readline');

const terminal = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questionForUser = (question) => {
  return new Promise((resolve) => {
    terminal.question(question, (answer) => {
      if (!answer.length) {
        console.log('Please, enter something');

        return questionForUser(question);
      } else {
        resolve(answer);
      }
    });
  });
};

const copyFile = async() => {
  const originalFile = await questionForUser('Choose a file to copy: ');
  let copiedFile = await questionForUser('Choose a name for a new file: ');

  if (copiedFile === originalFile) {
    copiedFile = await questionForUser('The copied file cannot have the '
    + 'same name as the original. Please enter a another name: ');
  }

  fs.copyFile(`src/${originalFile}`, `src/${copiedFile}`, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('You have successfully copied the file');
    }
  });

  terminal.close();
};

copyFile();
