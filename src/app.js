const fs = require('fs');
const path = require('path');

const sourceFile = process.argv[2];
const destinationFile = process.argv[3];

// Якщо користувач не передав обидва аргументи, виводимо помилку
if (!sourceFile || !destinationFile) {
  // eslint-disable-next-line no-console
  console.error(
    'Помилка: Необхідно вказати вихідний файл та файл призначення.',
  );
} else {
  // Отримуємо абсолютні шляхи
  const absoluteSource = path.resolve(sourceFile);
  const absoluteDestination = path.resolve(destinationFile);

  // Виконуємо копіювання лише якщо шляхи не співпадають
  if (absoluteSource !== absoluteDestination) {
    try {
      fs.copyFileSync(sourceFile, destinationFile);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error.message);
    }
  }
}
