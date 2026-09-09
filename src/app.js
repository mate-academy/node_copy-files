'use strict';

/* eslint-disable no-console */

const fs = require('fs');

function main() {
  try {
    const params = process.argv.slice(2);
    const sourceTerminal = params[0];
    const destTerminal = params[1];

    if (params.length !== 2 || !sourceTerminal || !destTerminal) {
      console.error('Please enter source and destination');
      process.exit(0);
    } else {
      if (sourceTerminal.startsWith('-') || destTerminal.startsWith('-')) {
        console.error('Flags are not supported');
        process.exit(0);
      }

      if (sourceTerminal === destTerminal) {
        return;
      }

      fs.stat(sourceTerminal, (srcErr, srcStats) => {
        if (srcErr) {
          console.error('Source file does not exist');
          process.exit(0);
        }

        if (!srcStats.isFile()) {
          console.error('Source is not a file');
          process.exit(0);
        }

        fs.stat(destTerminal, (destErr, destStats) => {
          if (!destErr && destStats.isDirectory()) {
            console.error('Destination is a directory');
            process.exit(0);
          }

          fs.copyFile(sourceTerminal, destTerminal, (err) => {
            if (err) {
              console.error('Error copying file');
              process.exit(0);
            }
          });
        });
      });
    }
  } catch (err) {
    console.error('Error copying file:', err.message);
  }
}

main();
