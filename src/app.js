'use strict';

const fs = require('fs');

const [path, newPath] = process.argv.slice(2);

if (path !== newPath) {
  const fileData = fs.readFileSync(path, 'utf-8');

  fs.writeFileSync(newPath, fileData);
}
