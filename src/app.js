/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-return */
/* eslint-disable no-console */
'use strict';
import fs from 'fs';

const args = process.argv.slice(2);

export function copyFile(source, dest) {
  if (source === dest) {
    return;
  }

  try {
    fs.copyFileSync(source, dest);
  } catch (error) {
    console.error(error);

    if (process.env.NODE_ENV !== 'test') {
      process.exit(1);
    }
  }
}

copyFile(...args);
