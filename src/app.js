/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const comands = process.argv.slice(2);
let name = path.basename(comands[0]).split('.');

name[0] += '-copy';
name = name.join('.');

fs.cp(comands[0], `${comands[1]}/${name}`, (error) => {
  console.log(error);
});
