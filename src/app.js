'use strict';

const fs = require('fs');

const [fileFrom, fileName] = process.argv.slice(2);

fs.copyFile(`${fileFrom}`, `${fileName}`, (error) => {
  if (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    // eslint-disable-next-line no-console
    console.log('щось пішло не так');

    return;
  }

  if (fileFrom === fileName) {
    // eslint-disable-next-line no-console
    console.log('Ви намагається скопіювати в те саме місце');

    return;
  }

  // eslint-disable-next-line no-console
  console.log('compleat');
});
