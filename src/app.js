'use strict';
import fs from 'fs';

const copyFile = () => {
  try {
    const [moveFrom, moveTo] = process.argv.slice(2);

    if (!moveFrom || !moveTo) {
      // eslint-disable-next-line no-console
      console.error('Input all arguments');

      return;
    }

    fs.readFile(moveFrom, 'utf8', (error, data) => {
      if (error) {
        // eslint-disable-next-line no-console
        console.error('Can not read the file', error.message);

        return;
      }

      fs.writeFile(moveTo, data, 'utf8', (err) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.error('Can not write the file', err.message);
        }
        // eslint-disable-next-line no-console
        console.log('Success!');
      });
    });
    // eslint-disable-next-line no-console
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e.message);
  }
};

copyFile();
