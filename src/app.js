'use strict';

const path = require('path');
const { copyFiles } = require('./modules/copyFiles');

// for checking how it works, use command below
// node src/app.js  cp file.txt file-copy.txt

const args = process.argv.slice(2);

const command = args[0];
const fromFileDirectory = path.join(__dirname, args[1]);
const destinationFileDirectory = path.join(__dirname, args[2]);;

copyFiles(command, fromFileDirectory, destinationFileDirectory);
