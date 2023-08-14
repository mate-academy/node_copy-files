'use strict';

const fs = require('fs');

function funcRead() {
  const terminal = process.argv.slice(2);
  const filePath = './src/' + terminal[0];
  const newFilePath = './src/' + terminal[1];
  const isFile = fs.existsSync(filePath);

  if (isFile) {
    const fileInfo = fs.readFileSync(filePath, 'utf8');

    fs.writeFile(newFilePath, fileInfo, (err, data) => {
      if (err) {

      }
    });
  }
}

funcRead();
