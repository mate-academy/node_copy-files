'use strict';

import fs from 'fs';

/* eslint-disable no-console */

const copyPaste = () => {
  const files = {
    from: process.argv[2] || '',
    to: process.argv[3] || '',
  };

  if (!files.from || !files.to) {
    throw new Error('2 valid file paths are required');
  }

  fs.readFile(files.from, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
    }

    fs.writeFile(files.to, data, (error) => {
      if (error) {
        console.error(error);
      }
    });
  });
};

copyPaste();
