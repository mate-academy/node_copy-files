'use strict';

const fs = require('fs');

const copyFile = () => {
  const [src, dest] = process.argv.slice(2);

  if (src === dest) {
    return;
  }

  try {
    fs.copyFileSync(src, dest);
    
    console.log('File copied!');
  } catch (err) {
    console.error(err);
  }
};

copyFile();
