import fs from 'fs/promises';
import path from 'path';

const appPath = process.argv[1];
const source = process.argv[2];
const destination = process.argv[3];

(async() => {
  if (source === destination || !source || !destination) {
    return false;
  }

  const _dirname = appPath.replace('app.js', '');

  const pathToSource = path.join(_dirname, source);
  const pathToDestination = path.join(_dirname, destination);
  let fileToCopy = '';

  try {
    fileToCopy = await fs.readFile(pathToSource, 'utf8');
    // eslint-disable-next-line no-console
    console.log(`The ${source} file was successfully copied to ${destination}`);
  } catch (error) {
    throw new Error(`Can't read a file`, error);
  }

  await fs.writeFile(pathToDestination, fileToCopy, { flag: 'a+' }, (error) => {
    throw new Error(`Something was wrong during coppying, ${error}`);
  });
})();
