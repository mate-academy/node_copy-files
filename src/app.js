'use strict';

const fs = require('fs');

function copyFile() {
  const [fileToCopy, fileToCreate] = process.argv.slice(2);

  if (fileToCopy === fileToCreate) {
    return;
  }

  const fileContent = fs.readFileSync(fileToCopy, 'utf8');

  fs.writeFileSync(fileToCreate, fileContent);
}

copyFile();
