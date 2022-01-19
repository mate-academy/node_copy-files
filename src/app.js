'use strict';

const fs = require('fs');

const [fileFrom, fileTo] = process.argv.slice(2);

if (!fileFrom.includes('/') && !fileTo.includes('/')) {
  // eslint-disable-next-line no-console
  console.log('Ви намагається скопіювати в те саме місце');

  return
}

const destArrFrom = fileFrom.split('/');
const nameFileFrom = destArrFrom[0];
const destArr = fileTo.split('/');
const nameFileTo = destArr[0];


if (nameFileFrom === nameFileTo) {
  // eslint-disable-next-line no-console
  console.log('Ви намагається скопіювати в те саме місце');

  return;
}

fs.copyFile(`${fileFrom}`, `${fileTo}`, (error) => {
  if (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    // eslint-disable-next-line no-console
    console.log('щось пішло не так');

    return;
  }

  // eslint-disable-next-line no-console
  console.log('compleat');
});
