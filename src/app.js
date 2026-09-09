const fs = require('fs');

(() => {
  const [source, dest] = process.argv.slice(2);

  try {
    fs.copyFileSync(source, dest);
  } catch (err) {
    // eslint-disable-next-line
    console.error(err);
  }
})();
