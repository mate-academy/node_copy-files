/* eslint-disable no-console */
const fs = require('fs');

function copyFileSync(firstFile, secondFile) {
  try {
    if (firstFile === secondFile) {
      console.log('Файлы одинаковые, копирование не требуется');

      return;
    }

    fs.copyFileSync(firstFile, secondFile);
    console.log('Копирование успешно завершено');
  } catch (e) {
    console.error('Ошибка:', e.message);
  }
}

copyFileSync(process.argv[2], process.argv[3]);
