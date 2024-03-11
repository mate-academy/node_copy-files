/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');

const [, , source, destination] = process.argv;

if (!source || !destination) {
  console.error('Usage: node src/app.js <source> <destination>');
  process.exit();
}

if (source !== destination) {
  copyFile();
}

async function copyFile() {
  try {
    const data = await fs.readFile(source);

    await fs.writeFile(destination, data);
    console.log('File has been copied');
  } catch (error) {
    console.error('Error:', error.message);
  }
}
