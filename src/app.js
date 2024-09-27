/* eslint-disable no-console */
const fs = require('fs');

function copy() {
  const [src, dest] = process.argv.slice(2);

  if (src === dest) {
    return;
  }

  try {
    const fileData = fs.readFileSync(src, 'utf-8');

    fs.writeFileSync(dest, fileData);
  } catch (err) {
    console.error(err);
  }
}

copy();
