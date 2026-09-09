'use strict';

const fs = require('fs');
const path = require('path');

function copyFile(source, target) {
  if (path.resolve(source) === path.resolve(target)) {
    return;
  }

  fs.cp(source, target, (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error(`Error copying file from ${source} to ${target}:`, err);
    } else {
      // eslint-disable-next-line no-console
      console.log(`File copied from ${source} to ${target}`);
    }
  });
}

function main() {
  const [source, target] = process.argv.slice(2);

  if (!source || !target) {
    // eslint-disable-next-line no-console
    console.error('Usage: node app.js <source> <target>');

    return;
  }

  copyFile(source, target);
}

if (require.main === module) {
  main();
}

module.exports = {
  copyFile,
};
