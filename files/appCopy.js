'use strict';

const fs = require('fs');

const copy = () => {
  const [sourcePath, destPath] = process.argv.slice(2);

  if (!sourcePath || !destPath) {
    throw new Error(
      'You should pass the way to the source file and the way to the dest file.'
    );
  }

  if (sourcePath === destPath) {
    throw new Error('The source and destination paths must be different');
  }

  try {
    const data = fs.readFileSync(sourcePath);

    fs.writeFileSync(destPath, data);
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.error(error);
  }
};

copy();
