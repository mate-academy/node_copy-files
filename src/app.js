/* eslint-disable no-console */
'use strict';

const { copyFile } = require('fs/promises');

async function app() {
  const [source, destination] = process.argv.slice(2);

  if (!source || !destination) {
    /* eslint-disable-next-line no-console */
    console.error('Provide source and destination');

    return;
  }

  if (source === destination) {
    return;
  } else {
    try {
      await copyFile(source, destination);
    } catch (e) {
      console.error(`The file could not be copied. Error: ${e}`);
    }
  }

  process.exit(0);
}

app();

module.exports = { app };
