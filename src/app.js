'use strict';

const fs = require('fs');

const [pathToCopy, path] = process.argv.slice(2);

(() => {
  if (pathToCopy === undefined || path === undefined) {
    // eslint-disable-next-line no-console
    console.log(`usage: origin_file target_file
       origin_file target_directory\n`);

    return 1;
  }

  if (!fs.existsSync(pathToCopy)) {
    // eslint-disable-next-line no-console
    console.log('\nNo such file or directory\n');

    return 1;
  }

  if (pathToCopy === path) {
    // eslint-disable-next-line no-console
    console.log(`\n${pathToCopy} and ${path} are identical (not copied). \n`);

    return 1;
  }

  try {
    fs.copyFileSync(pathToCopy, path);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`\nUnexpected error: ${error.message}\n`);
  }
})();
