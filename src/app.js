'use strict';

const { copy } = require('./copy');

function app() {
  const args = process.argv.slice(2);

  if (args.length !== 2) {
    // eslint-disable-next-line no-console
    console.error('Error: Wrong number of arguments');

    return;
  }

  const [src, dest] = args;

  if (src === dest) {
    return;
  }

  copy(src, dest);
}

app();

module.exports = { app };
