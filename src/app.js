/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const args = process.argv.slice(2);

if (args.length < 2) {
  console.error('Invalid number of arguments');
} else {
  const [source, destination] = args;

  if (source !== destination) {
    try {
      const content = fs.readFileSync(source, 'utf-8');

      fs.writeFileSync(destination, content, 'utf-8');
    } catch (err) {
      console.error(err.message);
    }
  }
}
