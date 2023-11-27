/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const fileCopy = (file, dest) => {
  try {
    const fileToCopy = fs.readFileSync(file);

    fs.writeFileSync(path
      .join(dest, path.basename(file)), fileToCopy);
  } catch (err) {
    throw new Error(err);
  }
};

fileCopy(path.join(__dirname, 'file_to_copy', 'I_am_file_to_copy.html')
  , path.join(__dirname, 'file_to_copy', 'copied_files'));

module.exports = { fileCopy };
