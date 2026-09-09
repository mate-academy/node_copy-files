/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const app = () => {
  const sourcePath = process.argv[2];
  const destinationPath = process.argv[3];

  if (!sourcePath || !destinationPath) {
    console.error('Missing arguments');

    return;
  }

  if (sourcePath === destinationPath) {
    return;
  }

  if (!fs.existsSync(sourcePath)) {
    console.error('File does not exist');

    return;
  }

  const sourceStat = fs.statSync(sourcePath);

  if (sourceStat.isDirectory()) {
    console.error('Wrong path');

    return;
  }

  if (fs.existsSync(destinationPath)) {
    const destinationStat = fs.statSync(destinationPath);

    if (destinationStat.isDirectory()) {
      console.error('Wrong path');

      return;
    }
  }

  try {
    const content = fs.readFileSync(sourcePath);

    fs.writeFileSync(destinationPath, content);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { app };

app();
