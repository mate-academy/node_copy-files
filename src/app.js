/* eslint-disable no-console */
'use strict';
import fsp from 'fs/promises';

async function copyFile() {
  const argv = process.argv;
  const source = argv[2];
  const destination = argv[3];

  if (source !== destination) {
    try {
      await fsp.cp(source, destination);
    } catch (error) {
      console.error(error);
    }
  }
}

copyFile();
