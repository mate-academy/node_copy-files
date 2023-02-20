'use strict';

require('fs').cp(process.argv[2], process.argv[3], (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
});
