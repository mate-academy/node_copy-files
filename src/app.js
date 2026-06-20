/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

const fs = require('fs/promises');

const source = process.argv[2];
const destination = process.argv[3];

if (source === destination) {
  process.exit(0);
}

if (!source || !destination) {
  console.error('Only one argument is provided');
}

async function copy(from, to) {
  try {
    const content = await fs.readFile(`./${from}`, 'utf-8');

    await fs.writeFile(`./${to}`, content);
  } catch (err) {
    if (err.code === 'EISDIR') {
      console.error('You try to use a directory');
    }
    console.error(err);
  }
}

copy(source, destination);
