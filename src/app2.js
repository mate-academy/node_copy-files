/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [pathToFile, newPathToFile] = process.argv.slice(2);

const copyFile = () => {
  if (pathToFile === newPathToFile) {
    console.log(`
      You have added the same paths in the parameters.
      Please change the params
    `);

    return;
  }

  fs.copyFile(pathToFile, newPathToFile, (error) => {
    if (error) {
      console.log(
        `Have some problems with paths ${pathToFile} or ${newPathToFile}`
      );
    } else {
      console.log(
        `The file was successfully copied from ${pathToFile} to ${newPathToFile}`,
      );
    }
  });
};

copyFile();
