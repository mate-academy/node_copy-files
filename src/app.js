'use strict';
/* eslint-disable no-console */

const fs = require('fs');

const [source, destination] = process.argv.slice(-2);

fs.cp(source, destination, (error) => {
  console.error(error);
});
