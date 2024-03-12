/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');

async function copyFiles(source, dist) {
  try {
    if (source !== dist && checkFile(source)) {
      const content = await readFile(source);

      await writeData(dist, content);
    }
  } catch (error) {
    console.error(error);
  }
}

async function checkFile(file) {
  try {
    await fs.access(file);

    return true;
  } catch (error) {
    if (error.code === 'ENOENT') {
      return false;
    } else {
      console.error(error);
    }
  }
}

async function readFile(path) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf-8' });

    return data;
  } catch (error) {
    console.error(error);
  }
}

async function writeData(path, content) {
  try {
    await fs.writeFile(path, content);
  } catch (error) {
    console.error(error);
  }
}

const args = process.argv.slice(2);

copyFiles(args[0], args[1]);
