/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [source, dest] = process.argv.slice(2);

if (!source || !dest || source === dest) {
  console.error('Error: parameters are invalid');
} else {
  fs.cp(source, dest, (error) => {
    console.error(error);
  });
}
