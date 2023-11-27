import readline from 'readline';
import fs from 'fs/promises';

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Enter the location to copy from and copy to \n', (input) => {
  const location = input.split(' ');
  const copyFrom = location[0];
  const copyTo = location[1];

  if (location.length !== 2) {
    throw new Error('Only 2 arguments expected');
  };

  if (copyFrom === copyTo) {
    terminal.close();
  }

  fs.readFile(copyFrom, 'utf8')
    .then(content => {
      fs.writeFile(copyTo, content, (err) => {
        if (err) {
          throw new Error('Unable to copy file');
        }
      });
    })
    .catch(() => {
      throw new Error('Unable to read source file');
    });

  terminal.close();
});
