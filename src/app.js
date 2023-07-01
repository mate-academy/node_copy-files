'use strict';

const fs = require('fs/promises');
const path = require('path');

const copyFiles = () => {
  const cliArgs = process.argv.slice(2);
  const firstFilePath = path.join(__dirname, `/${cliArgs[0]}`);
  const secondFilePath = path.join(__dirname, `/${cliArgs[1]}`);

  if (firstFilePath === secondFilePath) {
    throw new Error('Do not copy data to the same file');
  }

  fs.readFile(firstFilePath, 'utf-8')
    .then(data => {
      fs.writeFile(secondFilePath, data);
    })
    .catch(error => {
      console.error(error);
    });
};

copyFiles();
