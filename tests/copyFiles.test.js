'use strict';

const fs = require('fs');
const { exec } = require('child_process');
const util = require('util');

// Convertendo exec para Promise
const execAsync = util.promisify(exec);

describe('File Copy', () => {
  const baseCommand = 'node src/app.js';

  beforeAll(() => {
    // Criar estrutura de diretórios para testes
    if (!fs.existsSync('tests/fixtures')) {
      fs.mkdirSync('tests/fixtures', { recursive: true });
    }
    fs.writeFileSync('tests/fixtures/source.txt', 'conteúdo teste');
    fs.writeFileSync('tests/fixtures/file.txt', 'conteúdo teste');
    fs.mkdirSync('tests/fixtures/dir', { recursive: true });
  });

  afterAll(() => {
    // Limpar após os testes
    fs.rmSync('tests/fixtures', { recursive: true, force: true });
  });

  test('should copy file to a new destination', async () => {
    const sourceFile = 'tests/fixtures/source.txt';
    const destinationFile = 'tests/fixtures/destination.txt';

    await execAsync(`${baseCommand} ${sourceFile} ${destinationFile}`);
    expect(fs.existsSync(destinationFile)).toBe(true);

    // Limpar após o teste
    fs.unlinkSync(destinationFile);
  });

  test('should throw error when source equals destination', async () => {
    const file = 'tests/fixtures/file.txt';
    await expect(execAsync(`${baseCommand} ${file} ${file}`))
      .rejects.toThrow();
  });

  test('should throw error for missing arguments', async () => {
    await expect(execAsync(`${baseCommand}`))
      .rejects.toThrow();
  });

  test('should throw error for directory source', async () => {
    const dir = 'tests/fixtures/dir';
    const file = 'tests/fixtures/file.txt';
    await expect(execAsync(`${baseCommand} ${dir} ${file}`))
      .rejects.toThrow();
  });

  test('should throw error for directory destination', async () => {
    const file = 'tests/fixtures/file.txt';
    const dir = 'tests/fixtures/dir';
    await expect(execAsync(`${baseCommand} ${file} ${dir}`))
      .rejects.toThrow();
  });

  test('should throw error for non-existent source', async () => {
    const nonExistent = 'tests/fixtures/non-existent.txt';
    const file = 'tests/fixtures/file.txt';
    await expect(execAsync(`${baseCommand} ${nonExistent} ${file}`))
      .rejects.toThrow();
  });
});
