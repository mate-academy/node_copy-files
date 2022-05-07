'use strict';

const fs = require('fs');

const [fileFrom, fileTo] = process.argv.slice(2);

function reviewPath(array) {
  let res = '';
  for (let i = 0; i < array.length - 1; i++) {
    res += array[i];

  }

  return res;
}

const destArrFrom = fileFrom.split('/');
const destArrTo = fileTo.split('/');
const pathFileFrom = reviewPath(destArrFrom);
const pathFileTo = reviewPath(destArrTo);

if (pathFileFrom === pathFileTo) {
  // eslint-disable-next-line no-console
  console.log('Ви намагається скопіювати в те саме місце!');

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
