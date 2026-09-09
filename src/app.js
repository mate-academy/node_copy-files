/* eslint-disable no-console */
const fs = require('fs');

const [source, destination] = process.argv.slice(2);

if (!source || !destination) {
  console.error('Source file and destination must be provided');

  process.exit();
}

if (source === destination) {
  console.error('Source file and destination are the same');

  process.exit();
}

try {
  const fileContent = fs.readFileSync(source, 'utf-8');

  fs.writeFileSync(destination, fileContent, 'utf-8');
  console.log('File copied successfully');
} catch (error) {
  console.error('An error occured: ', error);
}
