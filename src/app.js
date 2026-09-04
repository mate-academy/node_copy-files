/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copyFileApp = (source, destination) => {
  if (source === destination) {
    console.error('Source and destination can not be the same');

    return;
  }

  if (!destination) {
    console.error('One argument is missing');

    return;
  }

  const copyFile = async () => {
    try {
      await fs.promises.copyFile(source, destination);
    } catch (error) {
      console.error(error);
    }
  };

  copyFile();
};

const [origin, copy] = process.argv.slice(2);

copyFileApp(origin, copy);
