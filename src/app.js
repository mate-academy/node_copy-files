/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

// Забираем 2 аргумента из командной строки: имя исходного файла и путь, куда копировать
const [fileForCopy, copyTo] = process.argv.slice(2);

// Проверяем, что передано ровно два аргумента (исходный файл и новый путь)
if (process.argv.slice(2).length !== 2) {
  console.error(
    'Invalid argument count: exactly two positional arguments are required',
  );

  process.exit(0);
}

// Запускаем функцию копирования с переданными аргументами
copyFile(fileForCopy, copyTo);

function copyFile(source, newPath) {
  // Регулярка: если аргументы начинаются с "-" или "/" → считаем, что это флаг/опция
  const regularExpression = /^[/-]/;

  // Проверяем, что аргументы не содержат флагов/опций
  const argsIsInvalid =
    regularExpression.test(source) || regularExpression.test(newPath);

  // Проверяем, что исходный путь и новый путь не совпадают
  const pathsIsEqual = path.resolve(source) === path.resolve(newPath);

  if (pathsIsEqual) {
    console.error('Source and destination refer to the same path');

    return; // Если совпадают — просто выходим, ничего не делаем
  }

  if (argsIsInvalid) {
    console.error('Flags/options are not supported');
    process.exit(0); // Завершаем программу
  }

  // Читаем исходный файл асинхронно
  fs.readFile(source, (err, data) => {
    if (err) {
      // Если ошибка при чтении → выводим её
      console.error(err);
    } else {
      // Если чтение прошло успешно → записываем содержимое в новый файл
      fs.writeFile(newPath, data, (error) => {
        if (error) {
          // Если ошибка при записи → выводим её
          console.error(error);
        }
      });
    }
  });
}
