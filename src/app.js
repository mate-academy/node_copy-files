'use strict';

const fs = require('fs');
const readline = require('readline');

const app = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

app.question('Where do you want to copy file?', (newFile) => {
  if (!fs.existsSync(`src/${newFile}.txt`)) {
    fs.cp('src/file.txt', `src/${newFile}.txt`, (err) => {
      if (err) {
        return err;
      }
    });
  }

  app.close();
});
