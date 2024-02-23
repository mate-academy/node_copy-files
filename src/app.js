'use strict';

/* eslint-disable no-console */
const fs = require('fs').promises;
const path = require('path');

const copyFile = async() => {
  const args = process.argv.slice(2);
  const [source, destination] = args;

  const sourceAbsolutePath = path.resolve(source);
  const destinationAbsolutePath = path.resolve(destination);

  if (sourceAbsolutePath === destinationAbsolutePath) {
    console.log('Source and destination path must be different!');

    return;
  }

  try {
    const fileContent = await fs.readFile(sourceAbsolutePath);

    await fs.writeFile(destinationAbsolutePath, fileContent);

    console.log(`File copied from 
    ${sourceAbsolutePath} to ${destinationAbsolutePath}`);
  } catch (err) {
    console.log(err);
  }
};

copyFile();
