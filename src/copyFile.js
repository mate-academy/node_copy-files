const fs = require('fs');
const path = require('path');

function copyFile(source, destination) {
  try {
    if (path.resolve(source) === path.resolve(destination)) {
      // eslint-disable-next-line no-console
      console.log(
        'Source and destination paths are the same. No operation performed.',
      );

      return;
    }

    const sourceStats = fs.statSync(source);

    if (!sourceStats.isFile()) {
      throw new Error('Source path must be a file.');
    }

    fs.copyFileSync(source, destination);
    // eslint-disable-next-line no-console
    console.log(`File copied from '${source}' to '${destination}'`);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error: ${error.message}`);
  }
}

module.exports = {
  copyFile,
};
