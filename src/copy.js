'use strict';

const fs = require('fs');
const path = require('path');

function copy(currentPath, newPath) {
  const fromPath = path.join(__dirname, currentPath);
  const toPath = path.join(__dirname, newPath);
  const file = fs.readFileSync(fromPath, 'utf8');

  fs.writeFileSync(toPath, file);
}

module.exports = { copy };
