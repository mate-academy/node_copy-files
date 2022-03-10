import fs from 'fs';

const from = process.argv[2];
const when = process.argv[3];

copyFile(from, when);

function copyFile(copy, past) {
  if (!past[0].includes('.')) {
    return;
  }

  fs.readFile(copy, { encoding: 'utf-8' }, (error, data) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }

    fs.writeFile(past, data, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    });
  });
}
