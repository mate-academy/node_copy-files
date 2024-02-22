'use strict';

const { copyFile } = require('./copyFile');

/* eslint no-console: "warn" */

try {
  if (process.argv.length < 2 + 2) {
    throw new Error('Script accepts 2 arguments');
  }

  const [oldPath, newPath] = copyFile(...process.argv.slice(2));

  console.info(`Successfully copyed ${oldPath} to ${newPath}`);
} catch (error) {
  console.error(error);
}
