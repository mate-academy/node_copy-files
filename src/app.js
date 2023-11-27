/* eslint-disable no-console */

'use strict';

const fs = require('fs').promises;
const chalk = require('chalk');

async function handleInput(source, destination) {
  if (source === destination) {
    console.log(chalk.yellow('Source and destination should be different'));
  }

  try {
    await fs.copyFile(source, destination);
    console.log(chalk.bgGreen('Copied ' + source + ' to ' + destination));
  } catch (err) {
    console.log(chalk.bgRed('Falied... Check your source and destination...'));
  }
}

const app = () => {
  // eslint-disable-next-line max-len
  console.log('Example of prompt - node ./src/app ./src/source/1.txt ./src/destination/1.txt');

  const [source, destination] = process.argv.slice(2);

  handleInput(source, destination);
};

app();
