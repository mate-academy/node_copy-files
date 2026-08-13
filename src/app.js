/* eslint-disable no-console */

'use strict';

import fsp from 'node:fs/promises';

async function main() {
  const argv = process.argv.slice(2);

  if (argv.length < 2 || argv[0] === argv[1]) {
    return;
  }

  const [filePath, filePathCopy] = argv;

  try {
    const fileData = await fsp.readFile(filePath, 'utf8');

    await fsp.writeFile(filePathCopy, fileData).catch((error) => {
      console.error(error);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
