/* eslint-disable no-console */
'use strict';

const fs = require('node:fs');
const path = require('node:path');

function copyFile(source, destionation) {
  try {
    const sourcePath = path.resolve(source);
    const destPath = path.resolve(destionation);

    if (sourcePath === destPath) {
      console.error(`Source and destionation can't be the same`);
    }

    if (!fs.existsSync(sourcePath)) {
      console.error(`Source file "${source}" doesn't exist.`);
    }

    const sourceStat = fs.statSync(sourcePath);

    if (!sourceStat.isFile()) {
      console.error(`Source "${source}" is ont a file.`);
    }

    fs.copyFileSync(sourcePath, destPath);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

const params = process.argv.slice(2);

const [sourceFile, destinationFile] = params;

copyFile(sourceFile, destinationFile);
