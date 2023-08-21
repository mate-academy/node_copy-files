/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const { faker } = require('@faker-js/faker');

const content = faker.lorem.word();
const fileName = faker.lorem.word();
const firstPath = `${__dirname}/${fileName}.txt`;
const secondPath = `${__dirname}/${fileName} copy.txt`;

fs.writeFile(firstPath, content, (error) => {
  if (error) {
    console.error(error);
  }
});

fs.cp(firstPath, secondPath, (err) => {
  if (firstPath === secondPath) {
    console.log('You are trying to copy to the same location');

    return;
  }

  if (err) {
    console.log('Error Found:', err);
  }
});
