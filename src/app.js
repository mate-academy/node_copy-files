/* eslint-disable no-console */
'use strict';

const fs = require('fs');

async function readArgs() {
  return new Promise((resolve, reject) => {
    const args = process.argv;

    if (args.length < 4) {
      reject(new Error('Please provide both current path and target path'));
    }

    const [currentPath, targetPath] = args.slice(2);

    if (currentPath === targetPath) {
      reject(new Error('Please provide unique name of a target path'));
    }

    resolve({ currentPath, targetPath });
  });
}

function copyFile(targetPath, data) {
  try {
    fs.writeFileSync(targetPath, data);
  } catch (error) {
    console.error(error);
  }
}

async function makeACopy() {
  readArgs()
    .then(({ currentPath, targetPath }) => {
      fs.readFile(currentPath, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        }
        copyFile(targetPath, data);
      });
    })
    .catch((error1) => {
      console.error(error1);
    });
}

makeACopy();
