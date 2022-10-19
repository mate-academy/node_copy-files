/* eslint-disable no-console */
'use strict';

const inquirer = require('inquirer');
const fs = require('fs/promises');

const commandHandler = async() => {
  const command = await inquirer
    .prompt([{
      name: 'command',
      type: 'input',
      message: 'i am waiting for your command',
      validate: (line) => line.split(' ').length === 3,
    }]);

  const commandElements = command.command.split(' ');

  if (commandElements[0] !== 'cp') {
    console.log('you entered a wrong command');
  } else if (commandElements[1] === commandElements[2]) {
    console.log('you are trying to copy the same file');
  } else {
    try {
      const file = await fs.readFile(commandElements[1], 'utf-8');

      fs.writeFile(commandElements[2], file);
    } catch (err) {
      console.log(err);
    }
  }
};

commandHandler();
