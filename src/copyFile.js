'use strict';

const fs = require('fs');
const path = require('path');

const copyFile = (addressFrom, addresTo) => {
  if (addressFrom === addresTo) {
    return;
  }

  const from = path.join(__dirname, addressFrom);
  const to = path.join(__dirname, addresTo);

  fs.copyFileSync(
    from,
    to,
  );
};

module.exports = {
  copyFile,
};
