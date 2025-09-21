'use strict';

import fs from 'fs';

function copy() {
  const [sourceFile, destinationFile] = process.argv.slice(2);

  if (!sourceFile || !destinationFile) {
    // eslint-disable-next-line no-console
    console.error('One or two param is undefined');

    return;
  }

  if (sourceFile === destinationFile) {
    return;
  }

  if (!fs.existsSync(sourceFile)) {
    // eslint-disable-next-line no-console
    console.error('Non-existent source file');

    return;
  }

  const sourceStats = fs.statSync(sourceFile);

  if (sourceStats.isDirectory()) {
    // eslint-disable-next-line no-console
    console.error('Source is a directory');

    return;
  }

  if (fs.existsSync(destinationFile)) {
    const destStats = fs.statSync(destinationFile);

    if (destStats.isDirectory()) {
      // eslint-disable-next-line no-console
      console.error('Destination is a directory');

      return;
    }
  }

  try {
    fs.copyFileSync(sourceFile, destinationFile);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
}

copy();

export default copy;
