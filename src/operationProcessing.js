'use strict';

const { terminal } = require('./terminal.js');
const { getContent } = require('./getContent.js');
const { copyFile } = require('./copyFile.js');

function operationProcessing(response) {
  const responseData = response.split(' ');
  const [command, fileToCopy, fileToInsert] = responseData;

  if (responseData.length !== 3) {
    // eslint-disable-next-line max-len
    terminal.question('Error! Please enter all required parameters: ', operationProcessing);

    return;
  }

  if (command !== 'cp') {
    // eslint-disable-next-line max-len
    terminal.question('Error! Please enter proper operation name: ', operationProcessing);

    return;
  }

  if (fileToCopy === fileToInsert) {
    // eslint-disable-next-line max-len
    terminal.question('Error! File exists already. Please enter a new file path: ', operationProcessing);

    return;
  }

  const data = getContent(fileToCopy, operationProcessing);

  copyFile(fileToInsert, data, operationProcessing);
}

module.exports = { operationProcessing };
