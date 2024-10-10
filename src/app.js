'use strict';

const fs = require('fs');
const errorMsgs = {
  ERR_INVALID_ARG_TYPE: 'Invalid argument types',
  EPERM: 'Operation not permitted',
  ENOENT: "Can't find file",
};
const args = process.argv.slice(2);
const [sourceFilePath, destFilePath] = args;

if (args.length < 2) {
  // eslint-disable-next-line no-console
  console.error('argument missing');
} else {
  fs.copyFile(
    sourceFilePath,
    destFilePath,
    fs.constants.COPYFILE_FICLONE,
    (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(errorMsgs[err.code]);
      }
    },
  );
}
