/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [sourcePath, destinationPath] = process.argv.slice(2);

try {
  if (!sourcePath || !destinationPath) {
    throw new Error('Only one argument is provided');
  }

  const fileData = fs.readFileSync(sourcePath);

  fs.writeFileSync(destinationPath, fileData);
} catch (error) {
  console.error(error);
}
