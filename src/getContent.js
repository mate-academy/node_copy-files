'use strict';

const fs = require('fs');
const { terminal } = require('./terminal');

function getContent(path, startConversation) {
  try {
    return fs.readFileSync(`./src/${path}`, 'utf8');
  } catch (error) {
    terminal.question(`Error occurred while reading a file!
      Perhaps a path to the file is wrong.
      Check destinations and try again: `, startConversation);
  }
}

module.exports = { getContent };
