/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

function copying(src, dest) {
  if (args.length !== 2 || !src || !dest) {
    console.error(new Error('Two valid arguments must be entered'));

    return;
  }

  if ([src, dest].some((a) => a.startsWith('-'))) {
    console.error(new Error('Invalid arguments: flags are not allowed'));

    return;
  }

  let copyPath, pastePath;

  try {
    copyPath = fs.realpathSync(path.resolve(src));

    const copyStats = fs.statSync(copyPath);

    if (!copyStats.isFile()) {
      console.error(new Error('Only regular files are supported.'));

      return;
    }
  } catch (err) {
    console.error(err);

    return;
  }

  try {
    pastePath = fs.realpathSync(path.resolve(dest));
  } catch {
    pastePath = path.resolve(dest);
  }

  if (copyPath === pastePath) {
    return;
  }

  try {
    const destStats = fs.statSync(pastePath, { throwIfNoEntry: false });

    if (destStats && destStats.isDirectory()) {
      console.error(new Error('Destination exists and is a directory.'));

      return;
    }

    const parentDir = path.dirname(pastePath);
    const parentStats = fs.statSync(parentDir, { throwIfNoEntry: false });

    if (!parentStats) {
      console.error(new Error('Parent directory does not exist: ' + parentDir));

      return;
    }

    fs.copyFileSync(copyPath, pastePath);
  } catch (err) {
    console.error(err);
  }
}

copying(args[0], args[1]);
