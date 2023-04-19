'use strict';

const path = require('path');
const fs = require('fs');
const myConsole = require('console');

function main() {
  if (process.argv.length !== 4) {
    myConsole.log('Error! You should start program with'
     + 'file that you want to copy, and location to paste it');

    return;
  }

  const [,, file, insertTo] = process.argv;

  const fileLocation = path.join(__dirname, file);
  const insertLocation = path.join(__dirname, insertTo);
  const copyPath = path.join(insertLocation, path.basename(fileLocation));

  if (path.dirname(fileLocation) === path.dirname(copyPath)) {
    myConsole.log('Error! Same folder');

    return;
  }

  if (!fs.existsSync(copyPath)) {
    fs.mkdirSync(insertLocation, { recursive: true });
  }

  fs.copyFileSync(fileLocation, copyPath);
  myConsole.log(copyPath);
}

main();
