/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');
const path = require('path');

const [from, destination] = process.argv.slice(2);

if (!from || !destination) {
  console.error('Bad arguments!');
  process.exit();
}

const fromPath = path.resolve(from);
const destinationPath = path.resolve(destination);

if (fromPath !== destinationPath) {
  (async() => {
    try {
      const dataFromFile = await fs.readFile(from);

      await fs.writeFile(destination, dataFromFile.toString());
    } catch (err) {
      console.error(err);
    }
  })();
}
