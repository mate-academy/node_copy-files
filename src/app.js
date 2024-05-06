'use strict';

const fs = require('fs');

try {
  fs.writeFileSync(process.argv[3], fs.readFileSync(process.argv[2]));
} catch (err) {
  global.console.error(err);
}
