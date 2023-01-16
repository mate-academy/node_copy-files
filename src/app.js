/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';

const [sourse, destination] = process.argv.slice(2);

function copyFile(initPath, targetPath) {
  if (path.resolve(path.dirname(initPath)) === path.resolve(targetPath)) {
    console.log('The file cannot be copied to the same location!!!');

    return;
  }

  if (!fs.existsSync(initPath)) {
    console.log('File does not exist!!!');

    return;
  }

  const target = targetPath + path.sep + path.basename(initPath);

  fs.cp(initPath, target, (error) => {
    if (!error) {
      console.log(`${initPath} was copied to ${targetPath}`);
    } else {
      console.log('The file cannot be copied to this folder');
    }
  });
}

copyFile(sourse, destination);
