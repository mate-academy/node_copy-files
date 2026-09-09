'use strict';

const fs = require('fs');
const path = require('path');

function main() {
  const args = process.argv.slice(2);
  const sourceArg = args[0];
  const destArg = args[1];

  if (!sourceArg || !destArg) {
    // eslint-disable-next-line no-console
    console.error(
      'Error: Please provide both source and destination file paths.',
    );

    return;
  }

  const sourcePath = path.resolve(sourceArg);
  const destPath = path.resolve(destArg);

  if (sourcePath === destPath) {
    return;
  }

  if (!fs.existsSync(sourcePath)) {
    // eslint-disable-next-line no-console
    console.error('Error: Source file does not exist.');

    return;
  }

  const sourceStats = fs.statSync(sourcePath);

  if (sourceStats.isDirectory()) {
    // eslint-disable-next-line no-console
    console.error('Error: Source path is a directory.');

    return;
  }

  if (fs.existsSync(destPath)) {
    const destStats = fs.statSync(destPath);

    if (destStats.isDirectory()) {
      // eslint-disable-next-line no-console
      console.error('Error: Destination path is a directory.');

      return;
    }
  }

  fs.copyFileSync(sourcePath, destPath);
}

main();
