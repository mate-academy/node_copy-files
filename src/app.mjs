import fs from 'fs/promises';
import path from 'path';

const filePath = './src/test.txt';
const folderPath = './';
const enc = 'utf-8';

async function copyFile(pathFrom, pathTo, encoding) {
  const normalizedPathFrom = path.normalize(path.dirname(pathFrom));
  const normalizedPathTo = path.normalize(pathTo);

  if (normalizedPathFrom === normalizedPathTo) {
    return;
  }

  try {
    await fs.access(pathFrom, fs.constants.F_OK);

    console.log('File exists OK!');
  } catch (error) {
    throw new Error(`No such file or access denided ${error.message}`);
  }

  try {
    await fs.access(pathTo, fs.constants.F_OK);

    const stats = await fs.stat(pathTo);

    if(!stats.isDirectory()) {
      throw new Error('No such folder')
    }
  } catch (error) {
    throw new Error(`Error path checking ${error.message}`);
  }

  try {
    const fileName = path.parse(path.basename(pathFrom)).name + `-copy` + path.extname(pathFrom);

    const destinationPath = path.join(pathTo, fileName);

    const fileContent = await fs.readFile(pathFrom, encoding);

    console.log(fileName, destinationPath, fileContent);

     await fs.writeFile(destinationPath, fileContent, encoding);

    console.log('Success! File copied');

  } catch (error) {
    throw new Error(`Copy failed! ${error.message}`);
  }
};

copyFile(filePath, folderPath, enc);
