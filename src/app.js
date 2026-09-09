'use strict';

const fs = require('fs');
const path = require('path');

try {
  const [, , sourse, destination] = process.argv;

  // if sourse or destination is missing
  if (!sourse || !destination) {
    throw new Error('Sourse and destionation paths are required.');
  }

  const resolveSource = path.resolve(sourse);
  const resolvedDestination = path.resolve(destination);

  // Do nothing if path are the same
  if (resolveSource === resolvedDestination) {
    process.exit(0);
  }

  const sourceStats = fs.statSync(resolveSource);

  // only files are supported
  if (!sourceStats.isFile()) {
    throw new Error('Only files can be copied.');
  }

  const data = fs.readFileSync(resolveSource);

  fs.writeFileSync(resolvedDestination, data);
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(error.message);
}
