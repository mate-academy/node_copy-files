'use strict';

const fs = require('fs');
const { resolve } = require('path');

const [,, source, destination] = process.argv;

try {
  if (resolve(source) === resolve(destination)) {
    throw new Error('Cannot copy file to itself');
  }

  const fileContent = fs.readFileSync(source);

  fs.writeFileSync(destination, fileContent);
} catch (exception) {
  process.stdout.write(exception.message);
}
