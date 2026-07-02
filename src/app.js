'use strict';

const fs = require('node:fs/promises');

async function main() {
  const [, , source, dest] = process.argv;

  if (!source || !dest) {
    // eslint-disable-next-line no-console
    console.error('Source and destination paths are required');

    return;
  }

  if (source === dest) {
    return;
  }

  try {
    await fs.copyFile(source, dest);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

main();
