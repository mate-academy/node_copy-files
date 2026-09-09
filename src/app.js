/* eslint-disable no-console */
'use strict';
import fs from 'fs';

const [source, destination] = process.argv.slice(2);

function copyFile(inputFile, outputFile) {
  try {
    const file = fs.readFileSync(inputFile);

    fs.writeFileSync(outputFile, file);
  } catch (err) {
    console.error(err);
  }
}

copyFile(source, destination);
