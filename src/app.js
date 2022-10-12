'use strict';

const fs = require('fs/promises');
const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Enter: Address ', (data) => {
  const [fileName, copyName] = data.trim().split(' ');

  terminal.close();

  if (fileName !== copyName) {
    fs.copyFile(fileName, copyName, (error) => {
      if (error) {
        terminal.write(error);
      } else {
        terminal.write('Succesfully');
      }
    });
  }
});
