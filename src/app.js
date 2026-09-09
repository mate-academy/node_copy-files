/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function main() {
  const [source, dest] = process.argv.slice(2);

  // console.log(path.join(__dirname, dest));

  if (dest === undefined) {
    console.error('Provide destination file.');

    return;
  }

  if (!fs.existsSync(source)) {
    console.error("Source file doesn't exist");

    return;
  }

  if (fs.statSync(source).isDirectory()) {
    console.error('Provide a file, not a directory');

    return;
  }

  if (fs.existsSync(dest) && fs.statSync(dest).isDirectory()) {
    console.error('Provide a file, not a directory');

    return;
  }

  if (source === dest) {
    return;
  }

  fs.copyFileSync(source, dest);
}

main();
