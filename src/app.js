'use strict';

const fs = require('fs');
const path = require('path');

function cp(source, destination) {
  fs.copyFile(source, destination, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Success!');
    }
  });
}

const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error('Usage: node app.js <source> <destination>');
} else {
  const [source, destination] = args.map((arg) => path.resolve(arg));

  cp(source, destination);
}

module.exports = {
  cp,
};
