/* eslint-disable no-console */
import fs from 'fs/promises';

const sourceFilePath = process.argv[2];
const destinationFilePath = process.argv[3];

const isDirectory = async (path) => {
  try {
    const stats = await fs.stat(path);

    return stats.isDirectory();
  } catch (error) {
    console.error(error);
  }
};

const copyFile = async (sourcePath, destinationPath) => {
  // console.log('start');
  //
  if (!destinationPath) {
    console.error('no second param');

    return;
  }

  try {
    if (await isDirectory(sourcePath)) {
      console.error('sourcePath is the directory');
    }
  } catch (error) {
    console.log(error);
  }

  try {
    if (await isDirectory(destinationPath)) {
      console.error('destinationPath is the directory');
    }
  } catch (error) {
    console.log(error);
  }

  if (sourcePath === destinationPath) {
    return;
  }

  try {
    await fs.access(sourcePath, fs.constants.F_OK);
    // console.log('copyFile');
  } catch (err) {
    console.error('Файл не существует');

    return;
  }

  try {
    // console.log('copying file');
    await fs.cp(sourcePath, destinationPath);
    // console.log('file copied');
  } catch (err) {
    // console.error(err);
  }
  // console.log('finish');
};

copyFile(sourceFilePath, destinationFilePath);
