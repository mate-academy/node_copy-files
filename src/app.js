'use strict';

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const main = () => {
  rl.question('Enter your command here or press Ctrl + C to exit ',
    (receivedCommand) => {
      const [command, source, destination] = receivedCommand.split(' ');

      if (command === 'cp' && !fs.existsSync(destination)) {
        fs.copyFile(source, destination, (err) => {
          if (err) {
            throw err;
          } else {
            // eslint-disable-next-line no-console
            console.log(`${source} was successfully copied as ${destination}`);
          }
        });
      }
      rl.close();
    }
  );
};

main();
