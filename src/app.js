/* eslint-disable no-console */
'use strict';
import fs from 'fs';

const params = process.argv.slice(2);

if (params.length < 2) {
  console.error(new Error('You need to write second parameter'));
} else if (params[0] !== params[1]) {
  fs.cp(params[0], params[1], (error) => console.error(error));
}
