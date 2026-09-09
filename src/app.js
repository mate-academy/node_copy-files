'use strict';

const fs = require('fs');

function copyFiles(sourceFile, destinationFile) {
  if (arguments.length < 2) {
    // eslint-disable-next-line no-console
    console.error('error: the function takes 2 arguments');

    return;
  }

  if (!fs.existsSync(sourceFile)) {
    // eslint-disable-next-line no-console
    console.error('error: non-existent source file');

    return;
  }

  if (sourceFile === destinationFile) {
    return;
  }

  const sourceFileStatus = fs.statSync(sourceFile);

  if (sourceFileStatus.isDirectory()) {
    // eslint-disable-next-line no-console
    console.error('error: the source is a directory');

    return;
  }

  if (fs.existsSync(destinationFile)) {
    const destinationFileStatus = fs.statSync(destinationFile);

    if (destinationFileStatus.isDirectory()) {
      // eslint-disable-next-line no-console
      console.error('error: the destinationFile is a directory');

      return;
    }
  }

  fs.cpSync(sourceFile, destinationFile, { recursive: true });
}

const args = process.argv.slice(2);

const filePath = args[0];
const copyPath = args[1];

if (args.length === 2) {
  copyFiles(filePath, copyPath);
} else {
  // eslint-disable-next-line no-console
  console.error('error: the function takes 2 arguments');
}
