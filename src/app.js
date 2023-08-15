'use strict';

const { copy } = require('./copy.service');

const start = () => {
  const [from, to] = process.argv.slice(2);

  copy(from, to);
};

start();
