'use strict';

import fs from 'fs';

const params = process.argv.slice(2);
const [userFile, fileCopy] = params;

function main() {
  if (userFile === fileCopy) {
    // eslint-disable-next-line no-console
    console.error('These addres files is the same');

    return;
  }

  if (!userFile) {
    // eslint-disable-next-line no-console
    console.error('Plesse writed adres for file');

    return;
  }

  if (!fileCopy) {
    // eslint-disable-next-line no-console
    console.error('Plesse writed adres for copy file');

    return;
  }

  fs.readFile(userFile, 'utf-8', (error, data) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.error(error);

      return;
    }

    fs.writeFile(fileCopy, data, (errors) => {
      if (errors) {
        // eslint-disable-next-line no-console
        console.error(errors);
      }
    });
  });
}

main();
