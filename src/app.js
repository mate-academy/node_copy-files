/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const copyP = process.argv[2];
const newP = process.argv[3];

const yellow = '\x1b[33m';
const green = '\x1b[32m';
const red = '\x1b[31m';

const logs = {
  location: () =>
    console.log(
      `${red}The file does not exist at this location!`
    ),
  same: () =>
    console.log(
      `${red}The path to the file is exactly the same as the previous one!`
    ),
  success:
    (fileName, resolveNewPath) => {
      console.log(`The file - ${yellow}${fileName} \x1b[0m`
        + `was successfully copied to ${green}${resolveNewPath}`);
    },
  error: () => {
    console.log(
      'You need to write the old path and the new one. '
       + `\nLike ${green}node ./src/app.js file.txt file-copy.txt`
    );
  },
};

function copyFile(copyPath, newPath) {
  const resolveCopyPath = path.resolve(copyPath);
  const resolveNewPath = path.resolve(newPath);
  const fileName = path.basename(resolveCopyPath);

  if (!fs.existsSync(resolveCopyPath)) {
    logs.location();

    return;
  }

  if (resolveCopyPath === resolveNewPath) {
    logs.same();

    return;
  }

  fs.copyFileSync(resolveCopyPath, resolveNewPath);

  logs.success(fileName, resolveNewPath);
}

if (copyP && newP) {
  copyFile(copyP, newP);
} else {
  logs.error();
}
