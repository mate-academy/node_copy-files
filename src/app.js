'use strict';

const fs = require('fs');
const dotenv = require('dotenv');
const minimist = require('minimist');

dotenv.config();

const command = minimist(process.argv.slice(2))._;

if (command[0] === 'cp') {
  const filePath = command[1];

  if (fs.existsSync(filePath)) {
    const dirPath = command[2];
    const fileDir = filePath.split('\\').slice(0, -1).join('/');
    const fileName = filePath.split('\\').slice(-1)[0].replace('.txt', '');

    if (dirPath !== fileDir) {
      fs.copyFileSync(filePath, dirPath + `/${fileName}-copy.txt`);
    }
  }
}
