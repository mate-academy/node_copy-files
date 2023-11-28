'use strict';

const fs = require('fs/promises');

const app = async() => {
  const [source, destination] = process.argv.slice(2);

  if (source === destination) {
    // eslint-disable-next-line no-console
    console.log(
      `Expected two different paths, recieved:\n${source}\n${destination}`
    );

    return;
  }

  try {
    await fs.copyFile(source, destination);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Failed to copy. Check your paths.');
  }
};

app();
