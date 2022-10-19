// To exec the file you should run node app.js
// + <filename>.<fileExtension> of source file && <filename>.<fileExtension>
// of destination

'use strict';

const fs = require('fs');
const path = require('path');

const source = process.argv[2];
const destination = process.argv[3];

if (source === destination) {
  throw new Error('⛔️Hey, you cannot copy to the same destination');
}

fs.readFile(path.join(__dirname, source), 'utf-8', (err, data) => {
  if (err) {
    throw new Error('Oops. This file does not exist. Correct format is '
    + ' <filename>.<fileExtension>. Like text.txt');
  }

  fs.writeFile(path.join(__dirname, destination), data, (error) => {
    if (error) {
      throw new Error('Sorry. Could not copy');
    }

    // eslint-disable-next-line no-console
    console.log('That was a pretty successful copying✅');
  });
});
