/* eslint-disable no-console */
"use strict";

const terminal = require("./modules/terminal");
const copy = require("./modules/copy");
const fs = require("fs");

const start = () => {
  terminal.question("Enter the path to the file: ", (path) => {
    const fileExist = fs.existsSync(path);

    if (fileExist) {
      copy(path);
    } else {
      console.log("Couldn't find the file, try again...");
      start();
    }
  });
};

start();
