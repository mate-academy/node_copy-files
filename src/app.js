/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const main = () => {
  const [source, destination] = process.argv.slice(2);

  if (!source || !destination) {
    return console.error('You must provide both source and destination paths.');
  }

  const sourcePath = path.resolve(source);
  const destinationPath = path.resolve(destination);

  if (sourcePath !== destinationPath) {
    try {
      fs.copyFileSync(sourcePath, destinationPath);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
};

main();
