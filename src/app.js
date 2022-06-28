/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function replDemo() {
  return new Promise((resolve, reject) => {
    terminal.setPrompt('Enter command> ');
    terminal.prompt();

    terminal.on('line', function(line) {
      const splitedCommand = line.split(' ');

      switch (splitedCommand[0]) {
        case 'cp':
          try {
            if (splitedCommand[1] && splitedCommand[2]
              && (splitedCommand[1] !== splitedCommand[2])) {
              fs.copyFile(splitedCommand[1], splitedCommand[2], (err) => {
                if (err) {
                  throw err;
                }

                // eslint-disable-next-line max-len
                const text = `${splitedCommand[1]} was copied to ${splitedCommand[2]}`;

                console.log(text);
              });
            }
          } catch (e) {
            console.error(e);
          }
          break;
        default:
          console.log(`${splitedCommand[0]} - is unsupported command`);
          break;
      }
      terminal.prompt();
    });
  });
}

async function run() {
  try {
    await replDemo();
  } catch (e) {
    console.log('failed:', e);
  }
}

run();
