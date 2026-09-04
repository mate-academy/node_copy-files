'use strict';

const fs = require('fs');

const createCopy = () => {
  const [addressFrom, addressTo] = process.argv.slice(2);

  if (addressFrom === addressTo) {
    return;
  }

  fs.copyFileSync(
    addressFrom,
    addressTo,
  );
};

createCopy();
