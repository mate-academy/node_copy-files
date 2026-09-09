'use strict';
import fs from 'fs';

const copyFile = () => {
  try {
    const params = process.argv.slice(2);
    const file = params[0];
    const fileCopy = params[1];

    if (!file || !fileCopy) {
      // eslint-disable-next-line no-console
      console.error('only 2 argumnts!');

      return;
    }

    fs.readFile(file, 'utf8', (error, data) => {
      if (error) {
        // eslint-disable-next-line no-console
        console.error(error.message);

        return;
      }

      fs.writeFile(fileCopy, data, 'utf8', (err) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.error(err.message);
        }
      });
    });
    // eslint-disable-next-line no-console
    console.log('File copied successfully!')
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e.message);
  }
};

copyFile();
