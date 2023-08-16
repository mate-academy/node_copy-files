'use strict';

const fs = require('fs');

function copyFile() {
  const command = process.argv[2];
  const firstFile = process.argv[3];
  const secondFile = process.argv[4];

  if (firstFile !== secondFile && command === 'cp') {
    const content = fs.readFileSync(firstFile);

    fs.writeFileSync(secondFile, content, (err) => {
      if (err) {
        throw new Error(err);
      }
    });
  }
};

copyFile();
