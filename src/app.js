'use strict';

const fs = require('fs/promises');

const [moveFrom, moveTo] = process.argv.slice(2);

if (!moveFrom || !moveTo) {
  // eslint-disable-next-line no-console
  console.error(
    'The "path" argument must be of type string or an' +
      'instance of Buffer or URL.',
  );
} else if (moveFrom !== moveTo) {
  fs.readFile(moveFrom, 'utf-8')
    .then((data) => {
      fs.writeFile(moveTo, data).catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
}
