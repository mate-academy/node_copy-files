'use strict';

const fs = require('fs/promises');

async function copy(src, dist) {
  try {
    const data = await fs.readFile(src, 'utf-8');

    await fs.writeFile(dist, data);
  } catch (err) {
  }
}

module.exports = {
  copy,
};
