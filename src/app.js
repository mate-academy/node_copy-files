'use strict';

const fs = require('fs');

/* eslint-disable no-console */

const copyPaste = () => {
  const files = {
    from: process.argv[2] || '',
    to: process.argv[3] || '',
  };

  if (!files.from || !files.to) {
    console.error('2 valid file paths are required');

    return;
  }

  fs.readFile(files.from, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
    }

    if (data) {
      fs.writeFile(files.to, data, (error) => {
        if (error) {
          console.error(error);
        }
      });
    }
  });
};

copyPaste();
