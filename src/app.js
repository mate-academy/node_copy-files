/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const fs = require('fs');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question(
  'enter path to your file and his name ',
  (input) => {
    const [ path, name ] = input.trim().split(' ');

    const file = new Promise((resolve, reject) => {
      fs.readFile(
        `${path}/${name}`,
        'utf8',
        (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        }
      );
    });

    terminal.question(`enter new path `, (newPath) => {
      file
        .then(data => {
          fs.writeFile(
            `${newPath}/${name}`,
            data,
            (err) => {
              if (err) {
                console.log(err);
              }
            },
          );

          console.log(`\nNew file is exists in ${newPath} directory`);
          terminal.close();
        })
        .catch(err => {
          console.log(err);
        });
    });
  },
);
