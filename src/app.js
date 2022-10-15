'use strict';

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function cp() {
  const [sourse, destination] = process.argv.slice(2);

  if (sourse === destination) {
    rl.close();

    return;
  }

  try {
    fs.readFileSync(sourse);
  } catch (error) {
    if (error.code === 'EISDIR') {
      rl.write('Error: sourse is not a file\n');
    }

    if (error.code === 'ENOENT') {
      rl.write('Error: sourse file does not exixt\n');
    }
    rl.close();

    return;
  }

  try {
    fs.copyFileSync(sourse, destination);
  } catch (error) {
    if (error.code === 'ERR_INVALID_ARG_TYPE') {
      rl.write(`Error: invalid destination directory\n`);
    }

    if (error.code === 'EPERM') {
      rl.write(`Error: unable to copy a file to "${destination}"\n`);
    }

    if (error.code === 'ENOENT') {
      rl.write('Error: destination directory does not exist\n');
    }
    rl.close();

    return;
  }

  rl.close();
}

cp();
