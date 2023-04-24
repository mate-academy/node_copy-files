/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

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
};

function copyFile(copyPath, newPath) {
  const resolveCopyPath = path.resolve(copyPath);
  const resolveNewPath = path.resolve(newPath);
  const fileName = path.basename(resolveCopyPath);

  console.log(resolveCopyPath);

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

copyFile('file-copy.txt', 'file-copy.txt');
