'use strict';

import fs from 'fs';

const [ fileFrom, fileTo ] = [...process.argv.slice(3)];

fs.readFile(fileFrom, (err, content) => {
  if (err) {
    throw err;
  }

  if (fileFrom === fileTo) {
    console.log("The same location");
    return;
  }

  fs.writeFile(fileTo, content, (err, data) => {
    if (err) {
      throw err;
    }

    console.log("Success. File was copied.");
  });
});

