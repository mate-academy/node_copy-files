/* eslint-disable max-len */
'use strict';

const fs = require('fs');
const path = require('path');
const { faker } = require('@faker-js/faker');

const { exec } = require('child_process');

function execAsync(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject({
          ...error,
          stdout,
          stderr,
        });
        return;
      }

      resolve({ stdout, stderr });
    });
  });
}

async function execExpectFailure(command) {
  try {
    await execAsync(command);
    throw new Error('Expected command to fail');
  } catch (error) {
    return error;
  }
}

describe('File Copy', () => {
  const baseCommand = 'node src/app.js';
  let sourceContent = '';
  const tempDir = path.join('tests', faker.word.noun());

  const sourceFile = path.join(tempDir, faker.system.commonFileName('txt'));
  const destinationFile = path.join(
    tempDir,
    faker.system.commonFileName('txt'),
  );

  beforeEach(() => {
    fs.mkdirSync(tempDir, { recursive: true });
    sourceContent = faker.lorem.paragraphs();
    fs.writeFileSync(sourceFile, sourceContent);
  });

  afterEach(() => {
    fs.rmSync(tempDir, { recursive: true, force: true });
  });

  test('should copy file to a new destination', async () => {
    await execAsync(`${baseCommand} ${sourceFile} ${destinationFile}`);

    expect(fs.existsSync(destinationFile)).toBe(true);

    const originalContent = fs.readFileSync(sourceFile, 'utf-8');
    const copiedContent = fs.readFileSync(destinationFile, 'utf-8');

    expect(copiedContent).toEqual(originalContent);
  });

  test('should copy file to a new destination overwriting existing content', async () => {
    const differentContent = faker.lorem.paragraph();

    fs.writeFileSync(destinationFile, differentContent);

    await execAsync(`${baseCommand} ${sourceFile} ${destinationFile}`);

    const copiedContent = fs.readFileSync(destinationFile, 'utf-8');

    expect(copiedContent).toEqual(sourceContent);
  });

  test('should do nothing if source and destination are the same', async () => {
    await execAsync(`${baseCommand} ${sourceFile} ${sourceFile}`);

    const beforeStats = fs.statSync(sourceFile);
    const afterStats = fs.statSync(sourceFile);

    expect(beforeStats.mtime).toEqual(afterStats.mtime);
  });

  test('should throw an error if only one argument is provided', async () => {
    const { stderr } = await execExpectFailure(`${baseCommand} ${sourceFile}`);

    expect(stderr.length).toBeGreaterThan(0);
  });

  test('should throw an error if source is a directory', async () => {
    const directoryPath = path.join(
      tempDir,
      faker.system.commonFileName('txt'),
    );

    fs.mkdirSync(directoryPath);

    const { stderr } = await execExpectFailure(
      `${baseCommand} ${directoryPath} ${destinationFile}`,
    );

    expect(stderr.length).toBeGreaterThan(0);
    expect(fs.existsSync(destinationFile)).toBe(false);
  });

  test('should throw an error if destination is a directory', async () => {
    const directoryPath = path.join(
      tempDir,
      faker.system.commonFileName('txt'),
    );

    fs.mkdirSync(directoryPath);

    const { stderr } = await execExpectFailure(
      `${baseCommand} ${sourceFile} ${directoryPath}`,
    );

    expect(stderr.length).toBeGreaterThan(0);
    expect(
      fs.existsSync(path.join(directoryPath, path.basename(sourceFile))),
    ).toBe(false);
  });

  test('should throw an error for non-existent source file', async () => {
    const nonExistentFile = path.join(
      tempDir,
      faker.system.commonFileName('txt'),
    );

    const { stderr } = await execExpectFailure(
      `${baseCommand} ${nonExistentFile} ${destinationFile}`,
    );

    expect(stderr.length).toBeGreaterThan(0);

    expect(fs.existsSync(destinationFile)).toBe(false);
  });
});
