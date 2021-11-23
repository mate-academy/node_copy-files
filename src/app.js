'use strict';

import readline from 'readline';
import fs from 'fs';

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

terminal.question("Input the command in format: 'cp fromFileName toFileName'\n", (input) => {
  const words = input.split(' ');

  if (words.length === 3 && words[0] === 'cp') {
    fs.readFile(words[1], (err, content) => {
      if (err) {
        throw err;
        terminal.close();
      }

      fs.writeFile(words[2], content, (err, data) => {
        if (err) {
          throw err;
          terminal.close();
        }

        console.log("Success.");
        terminal.close();
      });
    });
  } else {
    console.log("Please, check the input data");
    terminal.close();
  }
})

