'use strict';
/* eslint-disable no-console */
const fs = require('fs/promises');

const [firstPath, secondPath] = process.argv.slice(2);

const copyFile = async (pathToFile, pathToCopy) => {
  if (pathToFile !== pathToCopy) {
    try {
      const data = await fs.readFile(pathToFile, 'utf-8');

      await fs.writeFile(pathToCopy, data);
    } catch (error) {
      console.log('Please enter correct paths', error)
    }
  } else {
    console.log('You try to copy file to the same path')
  }
};

copyFile(firstPath, secondPath);
