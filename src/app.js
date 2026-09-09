'use strict';
/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const copyFiles = () => {
  const args = process.argv.slice(2);

  const [currentPath, newPath] = args;

  if (currentPath === newPath) {
    return;
  }

  if (!currentPath || !newPath) {
    console.error(
      'If you need a copy, you must add both the current and new path!',
    );

    return;
  }

  try {
    const currentContent = fs.readFileSync(currentPath);

    fs.writeFileSync(newPath, currentContent);
  } catch (error) {
    console.error(error);
  }
};

copyFiles();

module.exports = {
  copyFiles,
};
