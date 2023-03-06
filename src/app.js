'use strict';

const fs = require('fs');
const path = require('path');

// for checking how it works, use this command below
// node src/app.js  cp file.txt file-copy.txt

const copyFiles = () => {
  const args = process.argv.slice(2);

  const command = args[0];
  const fromFileDirectory = args[1];
  const destinationFileDirectory = args[2];

  if (command === 'cp' && fromFileDirectory !== destinationFileDirectory) {
    const data = fs.readFileSync(path.join(__dirname,
      fromFileDirectory), 'utf-8');

    fs.writeFileSync(path.join(__dirname,
      destinationFileDirectory), data);
  } else {
    global.console.log('Wrong command - for copying use "cp"');
  }
};

copyFiles();
