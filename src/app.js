/* eslint-disable no-console */
'use strict';

const { copyFile } = require('fs/promises');

async function app() {
  const [source, destination] = process.argv.slice(2);

  if (!source || !destination) {
    console.error('Provide source and destination');

    return;
  }

  if (source === destination) {
    console.error('Source and destination are the same');

    return;
  }

  try {
    await copyFile(source, destination);
    console.log(`${source} was copied to ${destination}`);
  } catch (e) {
    console.error(`The file could not be copied. Error: ${e}`);
  }

  process.exit(0);
}

app();

module.exports = { app };
