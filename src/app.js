'use strict';

const fs = require('fs');

const [,, source, destination] = process.argv;

try {
  fs.copyFileSync(source, destination, fs.constants.COPYFILE_EXCL);
} catch (exception) {
  process.stdout.write(exception.message);
}
