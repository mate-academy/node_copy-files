/* eslint-disable no-console */
'use strict';
import fs from 'fs';

  try {
    const file = fs.readFileSync(inputFile);

    fs.writeFileSync(outputFile, file);
  } catch (err) {
    console.error(err);
  }
}

copyFile(source, destination);
