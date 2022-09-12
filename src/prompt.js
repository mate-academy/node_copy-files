'use strict';

async function prompt(terminal, query) {
  const name = await terminal.question(query);

  return name;
}

module.exports = {
  prompt,
};
