/* eslint-disable */
'use strict';

const fs = require('fs');

function app(pathFromFile, pathToFile) {
  if (pathFromFile === pathToFile) {
    return;
  }

  try {
    const dataFromFile = fs.readFileSync(pathFromFile, 'utf-8');

    fs.writeFileSync(pathToFile, dataFromFile);
  } catch (err) {
    console.error(err);
  }
}

const args = process.argv.splice(2);

app(...args);

