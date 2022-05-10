/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const paths = process.argv.slice(3);

const [src, dest] = paths;

if (src === dest) {
  process.kill(0);
}

fs.copyFile(src, dest, (err) => {
  if (err) {
    console.log(err.message);
  }
});
