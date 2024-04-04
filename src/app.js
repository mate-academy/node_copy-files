'use strict';

const fs = require('fs').promises;

const copyFile = async (pathFrom, pathTo) => {
  if (pathFrom === pathTo) {
    return;
  }

  try {
    const data = await fs.readFile(pathFrom, 'utf8');

    await fs.writeFile(pathTo, data);
  } catch (err) {
    throw new Error(err);
  }
};

const main = async () => {
  const [pathFrom, pathTo] = process.argv.slice(2);

  if (!pathFrom || !pathTo) {
    throw new Error('Both source and destination paths are required.');
  }

  try {
    await copyFile(pathFrom, pathTo);
  } catch (error) {
    throw new Error('Error copying file:', error.message);
  }
};

main();
