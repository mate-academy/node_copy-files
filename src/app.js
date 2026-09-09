'use strict';

const fs = require('fs');

function copy(sourcePath, destinationPath) {
  try {
    fs.copyFileSync(sourcePath, destinationPath);
  } catch (error) {
    console.error(error);
  }

  console.log(
    `File is successfully copied from: ${sourcePath} to: ${destinationPath}`,
  );
}

function main() {
  if (process.argv.length !== 4) {
    console.error('Invalid arguments. Arguments length should be 4');

    return;
  }

  const sourcePath = process.argv[2];
  const destinationPath = process.argv[3];

  if (sourcePath === destinationPath) {
    return;
  }

  copy(sourcePath, destinationPath);
}

main();
