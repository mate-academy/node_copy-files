'use strict';

const { readFileSync, writeFileSync, existsSync, statSync } = require('fs');
const path = require('path');

const [, , src, dest] = process.argv;

const logError = (message) => {
  // eslint-disable-next-line no-console
  console.error(message);
};

if (!src || !dest) {
  logError('Two arguments required');
} else {
  const fullSrc = path.resolve(src);
  const fullDest = path.resolve(dest);

  if (fullSrc === fullDest) {
  } else if (!existsSync(fullSrc)) {
    logError('Source is incorrect');
  } else if (statSync(fullSrc).isDirectory()) {
    logError('Source is a directory');
  } else {
    const destDir = path.dirname(fullDest);

    if (!existsSync(destDir)) {
      logError('Destination is incorrect');
    } else if (existsSync(fullDest) && statSync(fullDest).isDirectory()) {
      logError('Destination is a directory');
    } else {
      try {
        const content = readFileSync(fullSrc, 'utf-8');

        writeFileSync(fullDest, content, 'utf-8');
        // eslint-disable-next-line no-console
        console.log('The copy was succeeded!');
      } catch (err) {
        logError('Error reading or writing file');
      }
    }
  }
}
