'use strict';

const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getUserInput(prompt) {
  return new Promise((resolve) => {
    terminal.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}

function closeInterface() {
  terminal.close();
}

module.exports = {
  getUserInput,
  closeInterface,
};
