'use strict';

const fs = require('fs');

function copyFile() {
  const [file, newFile] = process.argv.slice(2);

  if (!newFile) {
    // eslint-disable-next-line no-console
    console.error('Error: Please provide two arguments.');

    return;
  }

  if (file === newFile) {
    // eslint-disable-next-line no-console
    console.error('Error: Source and destination paths cannot be the same.');

    return;
  }

  fs.cp(file, newFile, (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error(`Error: ${err.message}`);
    } else {
      // eslint-disable-next-line no-console
      console.log(`Success: File copied from "${file}" to "${newFile}".`);
    }
  });
}

copyFile();
