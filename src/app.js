'use strict';

const fs = require('fs/promises');

async function main() {
  const [pathFrom, pathTo] = process.argv.slice(2);

  if (pathFrom === pathTo) {
    return;
  }

  try {
    const data = await fs.readFile(pathFrom, 'utf-8');

    await fs.writeFile(pathTo, data, 'utf-8');
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
}

main();
