/* eslint-disable no-console */
'use strict';

const command = process.argv[2];

if (command === 'cp') {
  const fs = require('fs/promises');
  const oldPath = process.argv[3];
  const newPath = process.argv[4];

  if (oldPath !== newPath) {
    (async() => {
      try {
        const content = await fs.readFile(oldPath, 'utf8');

        fs.mkdir('copied', (error) => {
          console.log('Error', error);
        });
        await fs.writeFile(`copied/${newPath}`, content);
      } catch (error) {
        console.log(`Error:`, error);
      }
    })();
  }
}
