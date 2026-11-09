'use strict';

const fs = require('fs');

function copyFile() {
  try {
    if (process.argv.length !== 4) {
      // eslint-disable-next-line no-console
      console.error('Please enter command with 2 arguments - file paths!');

      return;
    }

    const [originalFilePath, filePathToCopy] = process.argv.slice(2);

    if (originalFilePath === filePathToCopy) {
      return;
    }

    if (fs.statSync(originalFilePath).isDirectory()) {
      // eslint-disable-next-line no-console
      console.error('Original file path is directory and not a file!');

      return;
    }

    fs.readFile(originalFilePath, 'utf-8', (err, data) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(`Couldn't read from file`);

        return;
      }

      try {
        fs.writeFileSync(filePathToCopy, data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('File copying was unsuccessfull!');
      }
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
}

copyFile();
