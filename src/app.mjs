import fs from 'fs';

copyFile('./s.txt', '../m.txt');

function copyFile(copy, past) {
  if (!past[0].includes('.')) {
    return;
  }

  fs.readFile(copy, { encoding: 'utf-8' }, (error, data) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log(error);

      return;
    }

    fs.writeFile(past, data, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    });
  });
}
