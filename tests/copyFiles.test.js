'use strict';

const fs = require('fs');

const { exec } = require('child_process');
const util = require('util');
const execAsync = util.promisify(exec);

describe('File Copy', () => {
  const baseCommand = 'node src/app.js';
  let sourceContent = '';

  const sourceFile = 'tests/source.txt';
  const destinationFile = 'tests/destination.txt';

  beforeAll(() => {
    sourceContent = new Array(10).fill(Date.now().toString()).join('\n');

    fs.writeFileSync(sourceFile, sourceContent);
  });

  afterAll(() => {
    fs.unlinkSync(sourceFile);
    fs.unlinkSync(destinationFile);
  });

  test('should copy file to a new destination', async() => {
    await execAsync(`${baseCommand} ${sourceFile} ${destinationFile}`);

    expect(fs.existsSync(destinationFile)).toBe(true);

    const originalContent = fs.readFileSync(sourceFile, 'utf-8');
    const copiedContent = fs.readFileSync(destinationFile, 'utf-8');

    expect(copiedContent).toEqual(originalContent);
  });

  test('should do nothing if source and destination are the same', async() => {
    await execAsync(`${baseCommand} ${sourceFile} ${sourceFile}`);

    const beforeStats = fs.statSync(sourceFile);
    const afterStats = fs.statSync(sourceFile);

    expect(beforeStats.mtime).toEqual(afterStats.mtime);
  });
});
