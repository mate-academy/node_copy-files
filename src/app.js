'use strict';

const fs = require('node:fs');
const path = require('node:path');

const args = process.argv.slice(2);
const source = args[0];
const dest = args[1];

function exitWithError(message) {
  fs.writeSync(process.stderr.fd, `${message}\n`);
  process.exitCode = 1;
}

function main() {
  if (!source || !dest) {
    exitWithError('Usage: node app.js <source> <destination>');

    return;
  }

  if (path.resolve(source) === path.resolve(dest)) {
    return;
  }

  if (!fs.existsSync(source)) {
    exitWithError('Source file does not exist');

    return;
  }

  const sourceStat = fs.statSync(source);

  if (!sourceStat.isFile()) {
    exitWithError('Source is not a file');

    return;
  }

  if (fs.existsSync(dest)) {
    const destStat = fs.statSync(dest);

    if (destStat.isDirectory()) {
      exitWithError('Destination is a directory');

      return;
    }
  }

  fs.copyFileSync(source, dest);
}

main();
