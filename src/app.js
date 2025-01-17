/* eslint-disable no-console */
'use strict';

const fs = require('fs/promises');
const path = require('path');

main();

async function copyFileWithValidation(sourse, dest) {
  if (sourse === dest) {
    console.error('Шляхи до файлів однвкові');

    return;
  }

  const soursePath = path.resolve(sourse);
  const destPath = path.resolve(dest);

  try {
    await fs.copyFile(soursePath, destPath);
    console.log('Файл успішно скопійований');
  } catch (err) {
    console.error('Помилка копіювання:', err);
  }
}

async function main() {
  const [sourcePath, destPath] = process.argv.slice(2);

  if (!sourcePath || !destPath) {
    console.error('Пропущено один або два шляхи до файлів');

    return;
  }

  await copyFileWithValidation(sourcePath, destPath);
}
