'use strict';

const fs = require('fs/promises');
const { prompt } = require('./prompt');

async function readFile(path) {
  const content = await fs.readFile(path);

  return content;
}

async function createFile(path, data) {
  return fs.writeFile(path, data);
}

async function copyFile(terminal) {
  const from = await prompt(terminal, 'File origin path?\n');
  const to = await prompt(terminal, 'File copy path?\n');

  try {
    const content = await readFile(from);

    await createFile(to, content);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('No file found!');
    } else {
      console.log(err);
    }
  }

  console.log('Done!');
}

module.exports = {
  copyFile,
};
