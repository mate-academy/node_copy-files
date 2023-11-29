/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');

const copyFile = async(originPath, copyPath) => {
  if (originPath === copyPath) {
    return;
  }

  const content = await fs.readFile(originPath, 'utf8');

  await fs.writeFile(copyPath, content, { flag: 'w+' });
};

copyFile(process.argv[2], process.argv[3]);
