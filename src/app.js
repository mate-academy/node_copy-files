"use strict";

const fs = require("fs");
const terminal = require('./modules/terminal');
const copyFile = require('./modules/copy');
console.log(copyFile);

const prompt = () => {
  console.log("Let's copy a file!");
  terminal.question(
    "Which file do you want to copy? Enter full path: ",
    (fileName) => {
      console.log(fileName);

      if (!fs.existsSync(fileName)) {
        console.log("This file does not exist in this folder, try again");
        prompt();
      } else {
        terminal.question(
          "Where do you want to copy the file? Enter full path: ",
          (destPath) => {
            if (fileName === destPath) {
              terminal.question(
                "Cannot copy file to the same folder, enter a different path: ",
                (destPath) => {
                  copyFile(sourcePath, destPath);
                  terminal.close();
                }
              );
            } else {
              copyFile(fileName, destPath);
              terminal.close();
            }
          }
        );
      }
    }
  );
};

prompt();
