/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const customCopyFile = () => {
  const [from, to] = process.argv.slice(2);

  if (!to) {
    console.error('Error: Not enough second argument');

    return;
  }

  if (to === from) {
    return;
  }

  fs.cp(from, to, (err) => {
    if (err) {
      console.error(err);
    }
    console.log('Copied!');
  });
};

customCopyFile();
