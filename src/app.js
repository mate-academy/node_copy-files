'use strict';

const fs = require('fs');

const [fromDir, toDir] = process.argv.slice(2);

function copyFiles(from, to) {
  try {
    if (from === to) {
      return;
    }

    const file = fs.readFileSync(from, 'utf8');

    fs.writeFileSync(to, file);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
}

// function copyFiles(from, to) {
//   try {
//     if (from === to) {
//       return;
//     }

//     fs.cpSync(from, to, { recursive: true }, (error) => {
//       // eslint-disable-next-line no-console
//       console.error(error);
//     });
//   } catch (e) {
//     // eslint-disable-next-line no-console
//     console.error(e);
//   }
// }

copyFiles(fromDir, toDir);
