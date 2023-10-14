/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function copyFileAsync(source, destination) {
  if (source === destination) {
    console.log('Source and destination are the same. Exiting.');

    return;
  }

  fs.copyFile(source, destination, (err) => {
    if (err) {
      console.error('Error:', err);

      return;
    }
    console.log('File was copied successfully');
  });
}

function copyFileSync(source, destination) {
  if (source === destination) {
    console.log('Source and destination are the same. Exiting.');

    return;
  }

  try {
    fs.copyFileSync(source, destination);
    console.log('File was copied successfully');
  } catch (err) {
    console.error('Error:', err);
  }
}

rl.question('Do you want to use the synchronous version? (yes/no) ',
  (answer) => {
    const useSync = answer.toLowerCase() === 'yes';

    rl.question('Enter the source file name: ', (source) => {
      if (!fs.existsSync(source)) {
        console.log('Source file does not exist. Exiting.');
        rl.close();

        return;
      }

      rl.question('Enter the destination file name: ', (destination) => {
        if (useSync) {
          copyFileSync(source, destination);
        } else {
          copyFileAsync(source, destination);
        }

        rl.close();
      });
    });
  });
