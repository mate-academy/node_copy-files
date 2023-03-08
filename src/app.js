'use strict';

const path = require('path');
const { copyFiles } = require('./modules/copyFiles');

// for checking how it works, use command below
// node src/app.js  cp file.txt file-copy.txt

const [command, from, destination] = process.argv.slice(2);

const fromFileDirectory = path.join(__dirname, from);
const destinationFileDirectory = path.join(__dirname, destination);

copyFiles(command, fromFileDirectory, destinationFileDirectory);
