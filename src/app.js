/* eslint-disable no-console */

'use strict';

const readline = require('readline');
const fs = require('fs').promises;
const chalk = require('chalk');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function setPromptAndPrompt() {
  terminal.setPrompt(
    chalk.blue('Enter the source and destination separated by a space: ')
  );
  terminal.prompt();
}

async function handleInput(input) {
  const [source, destination] = input.split(' ');

  if (source === destination) {
    console.log(chalk.yellow('Source and destination should be different'));

    terminal.close();

    return;
  }

  try {
    await fs.copyFile(source, destination);
    console.log(chalk.bgGreen('Copied ' + source + ' to ' + destination));
    terminal.close();
  } catch (err) {
    console.log(chalk.bgRed('Falied... Check your source and destination...'));
    setPromptAndPrompt();
  }
}

const app = () => {
  console.log(`Current directory - ${__dirname}`);
  console.log(`Example of prompt - ./src/source/1.txt ./src/destination/1.txt`);

  setPromptAndPrompt();

  terminal.on('line', handleInput);
};

app();
