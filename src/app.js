/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');

const [source, destinaton] = process.argv.slice(2);

const copyFile = async () => {
  try {
    const content = await fs.readFile(source, 'utf-8');

    fs.writeFile(destinaton, content);
  } catch (_) {
    console.error('Failed to copy file');
  }
};

copyFile();
