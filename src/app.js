'use strict';

const fs = require('fs');

const cp = () => {
  const [prevPath, newPath] = process.argv.slice(2);

  if (prevPath === newPath) {
    return;
  }

  try {
    const data = fs.readFileSync(prevPath, 'utf-8');

    fs.writeFileSync(newPath, data);
  } catch (e) {
    // eslint-disable-next-line
    console.log('something went wrong', e);
  }
};

cp();

module.exports = { cp };
