'use strict';

const fs = require('fs');
const { terminal } = require('./terminal');

function copyFile(pathTo, content, startConversation) {
  fs.writeFile(`./src/${pathTo}`, content, (error) => {
    if (error) {
      terminal.question(`Error occurred while copying!
      Perhaps a path to the file is wrong.
      Check destinations and try again: `, startConversation);
    }
    terminal.write('Files successfully copied!');
    terminal.close();
  });
};

module.exports = { copyFile };
