/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function cp() {
  const [source, destination] = process.argv.slice(2);

  if (!fs.existsSync(source)) {
    console.error('Source file does not exist');

    return;
  }

  const sourceMeta = fs.statSync(source);

  if (!sourceMeta.isFile) {
    console.error('Source should be a file');

    return;
  }

  if (source === destination) {
    console.error('Nothing to do: source and destination are the same');

    return;
  }

  try {
    fs.cpSync(source, destination);
  } catch (error) {
    console.error(error);
  }
}

cp();
