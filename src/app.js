'use strict';

const fs = require('fs/promises');

const app = async() => {
  if (process.argv.length < 4) {
    // eslint-disable-next-line no-console
    console.log('Error: Both "copy" and "insert" arguments are required');

    return;
  }

  const [copy, insert] = process.argv.slice(2);

  if (copy === insert) {
    // eslint-disable-next-line no-console
    console.log('Error: "copy" and "insert" values should be different');

    return;
  }

  const data = await fs.readFile(copy, 'utf-8');

  try {
    await fs.writeFile(insert, data);

    // eslint-disable-next-line no-console
    console.log(`Success: File ${copy} has been copied to ${insert}`);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Failed to copy. Check your paths.');
  }
};

app();
