/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');

async function app() {
  const [fileToCopy, newFile] = process.argv.slice(2);

  if (fileToCopy === newFile) {
    return;
  }

  try {
    const data = await fs.readFile(fileToCopy, 'utf-8');

    await fs.writeFile(newFile, data);
  } catch (error) {
    console.error(error);
  }
}

app();
