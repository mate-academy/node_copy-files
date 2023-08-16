/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const { faker } = require('@faker-js/faker');

const content = faker.lorem.word();
const fileName = faker.lorem.word();
const firstPath = `./src/${fileName}.txt`;
const secondPath = `./src/${fileName} copy.txt`;

fs.writeFile(firstPath, content, (error) => {
  if (error) {
    console.error(error);
  }
});

fs.cp(firstPath, secondPath, (err) => {
  if (firstPath === secondPath) {
    return;
  }

  if (err) {
    console.log('Error Found:', err);
  }
});
