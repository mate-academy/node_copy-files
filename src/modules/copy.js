/* eslint-disable no-console */
"use strict";

const copy = (path) => {
  terminal.question("Destination? ", (destPath) => {
    if (path !== destPath) {
      const data = fs.readFileSync(path, "utf-8");
      fs.writeFileSync(destPath, data);

      terminal.close();
    } else {
      console.log("Try another location...");
      copy();
    }
  });
};

module.exports = copy;
