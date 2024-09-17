/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function copy() {
  const [sourceFile, destinationFile] = process.argv.slice(2);

  if (sourceFile === destinationFile) {
    return;
  }

  try {
    const sourceContent = fs.readFileSync(sourceFile, 'utf-8');

    fs.writeFileSync(destinationFile, sourceContent);
    console.log('File copied successfully');
  } catch (error) {
    console.error(error);
  }
}

copy();
