/* eslint-disable no-console */
'use strict';

const fs = require('fs');

fs.cp('./src/1.txt', './src/1 copy.txt', (err) => {
  if (err) {
    console.log('Error Found:', err);
  }
});
