/* eslint-disable no-console */
'use strict';

const fs = require('fs');

function clonFile() {
  const operation = process.argv[2];
  const pathToFile = process.argv[3];
  const pathToNewFile = process.argv[4];

  if (operation === 'cp') {
    const dataInFile = fs.readFileSync(pathToFile, 'utf8', (error, data) => {
      if (error) {
        return error;
      }

      return data;
    });

    console.log(dataInFile);

    fs.writeFile(pathToNewFile, dataInFile, (error) => {
      if (error) {
        return error;
      }
    });
  }
}

clonFile();
