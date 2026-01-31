'use strict';

const fs = require('fs/promises');
const path = require('path');

async function main() {
  const [filePath, fileCopyPath] = process.argv.slice(2);

  if (!filePath || !fileCopyPath) {
    // eslint-disable-next-line no-console
    console.error(
      'Please provide both the source file path and the destination file path.',
    );

    return;
  }

  const absoluteFilePath = path.resolve(filePath);
  const absoluteFileCopyPath = path.resolve(fileCopyPath);

  if (absoluteFilePath === absoluteFileCopyPath) {
    return;
  }

  try {
    await fs.copyFile(absoluteFilePath, absoluteFileCopyPath);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
}

main();
