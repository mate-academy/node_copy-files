'use strict';

import fs from 'fs';

function copyFile() {
  const [copyFrom, copyTo] = process.argv.slice(2);

  try {
    const copyFromData = fs.readFileSync(copyFrom).toString();

    fs.writeFileSync(copyTo, copyFromData);
  } catch (err) {
    // eslint-disable-next-line
    console.error(err);
  }
}

copyFile();
