const fs = require('fs');

const toCopy = process.argv[2];
const toInsert = process.argv[3];

if (toCopy !== toInsert) {
  try {
    const data = fs.readFileSync(toCopy, 'utf8');

    fs.writeFileSync(toInsert, data);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}
