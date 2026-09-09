/* eslint-disable no-console */
'use strict';

import fs from 'fs';
import path from 'path';

function copyFile() {
  if (process.argv.slice(2).length !== 2) {
    console.error('length is less');

    return;
  }

  const [entryFile, copyTo] = process.argv.slice(2);

  if (!entryFile || !copyTo) {
    console.error('One or two param is undefined');

    return;
  }

  let realSource;
  let realDest;

  try {
    realSource = fs.realpathSync(entryFile);
  } catch {
    console.error('Source file does not exist');

    return;
  }

  try {
    realDest = fs.realpathSync(copyTo);
  } catch {
    realDest = path.resolve(copyTo);
  }

  if (realSource === realDest) {
    return;
  }

  if (!fs.existsSync(entryFile)) {
    console.error('Non-existent source file');

    return;
  }

  const entryStats = fs.statSync(entryFile);

  if (!entryStats.isFile()) {
    console.error('Source is not a regular file');

    return;
  }

  if (fs.existsSync(copyTo)) {
    const destStats = fs.statSync(copyTo);

    if (!destStats.isFile()) {
      console.error('Destination is not a regular file');

      return;
    }
  }

  try {
    fs.copyFileSync(entryFile, copyTo);
  } catch (err) {
    console.error(err);
  }
}

copyFile();

export default copyFile();
