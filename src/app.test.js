/* eslint-disable max-len */
'use strict';

const { copyFiles } = require('./app');
const fs = require('fs');

describe('Copy files test', () => {
  test('Successfull copy of file from the deeper folder', () => {
    const pathFrom = './src/testFilesFolder/test3.txt';
    const pathTo = './testFilesFolder/test3-copy.txt';

    return copyFiles(pathFrom, pathTo)
      .then(data => {
        expect(data).toBe('operation success');

        fs.unlink(pathTo, (err) => {
          if (err) {
            throw new Error('');
          }
        });
      });
  });

  test('Successfull copy of file to the deeper folder', () => {
    const pathFrom = './testFilesFolder/test1.txt';
    const pathTo = './src/testFilesFolder/test1-copy.txt';

    return copyFiles(pathFrom, pathTo)
      .then(data => {
        expect(data).toBe('operation success');

        fs.unlink(pathTo, (err) => {
          if (err) {
            throw new Error('');
          }
        });
      });
  });

  test('Reject to copy file to the same folder', () => {
    const pathFrom = './testFilesFolder/test1.txt';
    const pathTo = './testFilesFolder/test1-copy.txt';

    return copyFiles(pathFrom, pathTo)
      .then(data => {
        expect(data).toBe('unable to copy to the same directory');
      });
  });

  test('Reject to copy file to the same folder with the same name', () => {
    const pathFrom = './testFilesFolder/test1.txt';
    const pathTo = './testFilesFolder/test1.txt';

    return copyFiles(pathFrom, pathTo)
      .then(data => {
        expect(data).toBe('unable to copy to the same directory');
      });
  });

  test('Reject to copy file to the new folder when it contain\'s exactly named file', () => {
    const pathFrom = './testFilesFolder/test1.txt';
    const pathTo = './src/testFilesFolder/test3.txt';

    return copyFiles(pathFrom, pathTo)
      .then(data => {
        expect(data).toBe('cann\'t copy to the name that already exist');
      });
  });

  test('Reject to copy to not valid file name', () => {
    const pathFrom = './testFilesFolder/test1.txt';
    const pathTo = './src/testFilesFolder/test3';

    return copyFiles(pathFrom, pathTo)
      .then(data => {
        expect(data).toBe('not valid name of new file');
      });
  });

  test('Throw error if from path not valid', () => {
    const pathFrom = './testFilesFolder/test.txt';
    const pathTo = './src/testFilesFolder/test33.txt';

    return copyFiles(pathFrom, pathTo)
      .then(data => {
        expect(data).toBe('way from doesn\'t exist');
      });
  });

  test('Throw error if to path not valid', () => {
    const pathFrom = './testFilesFolder/test1.txt';
    const pathTo = './sr/testFilesFolder/test33.txt';

    return copyFiles(pathFrom, pathTo)
      .then(data => {
        expect(data).toBe('way to doesn\'t exist');
      });
  });
});
