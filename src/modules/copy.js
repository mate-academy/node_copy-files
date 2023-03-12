'use strict';
const fs = require("fs");

const copyFile = (sourceFile, destFolder) => {
  fs.readFile(sourceFile, "utf8", (err, data) => {
    if (err) {
      console.log('error!');
      return;
    }

    fs.writeFileSync(destFolder, data);
  });

};

module.exports = copyFile;
