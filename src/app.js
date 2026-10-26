'use strict';

const fs = require('fs');

function app(source, destination) {
  if (!source || !destination) {
    throw new Error('Source and destination are required');
  }

  if (source === destination) {
    return;
  }

  const sourceStat = fs.statSync(source);

  if (!sourceStat.isFile()) {
    throw new Error('Source must be a file');
  }

  if (fs.existsSync(destination) && fs.statSync(destination).isDirectory()) {
    throw new Error('Destination must be a file');
  }

  fs.copyFileSync(source, destination);

  return true;
}

if (require.main === module) {
  const [source, destination] = process.argv.slice(2);

  try {
    app(source, destination);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error: ${error.message}`);
  }
}

module.exports = { app };
