'use strict';

const fs = require('fs');

const [command, file, copyFile] = process.argv.slice(2);
if (command !== 'cp') {
  console.log('You can use only copy command')
} else {
  file !== copyFile
    ? fs.copyFile(file, copyFile, (er) => {
      if (er) {
        console.log(er.code);
      }
    }
    )
    : console.log('You are trying to copy the same')
}
