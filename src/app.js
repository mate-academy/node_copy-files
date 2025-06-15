'use strict';

const fs = require('fs');

function app() {
  const args = process.argv.slice(2);
  const [sourcePath, destPath] = args;

  if (args.length < 2) {
    if (!sourcePath) {
      console.error('Source path is missing'); // eslint-disable-line no-console

      return;
    }

    if (!destPath) {
      console.error('Dest path is missing'); // eslint-disable-line no-console

      return;
    }
  }

  if (sourcePath === destPath) {
    return;
  }

  if (!fs.existsSync(sourcePath)) {
    console.error("Source file isn't exist"); // eslint-disable-line no-console

    return;
  }

  try {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`File copied from ${sourcePath} to ${destPath}`); // eslint-disable-line no-console
  } catch (err) {
    console.error('Error while copying file'); // eslint-disable-line no-console
  }
}

app();
