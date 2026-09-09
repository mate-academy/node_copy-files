'use strict';

const fs = require('fs');

const [ source = '', dest = '' ] = process.argv.slice(3);

if (!source.length || !dest.length) {
  // eslint-disable-next-line no-console
  console.error('The source and dest weren\'t provided');

  return;
}

fs.cp(source, dest, { recursive: true }, (error) => {
  if (error) {
    throw new Error(error.message);
  }
});
