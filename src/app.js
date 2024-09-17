'use strict';

const fs = require('fs');

const copy = (pathToInitialFile, pathToFinalFile) => {
  const content = fs.readFileSync(pathToInitialFile, 'utf-8');

  const inititalDirectory = pathToInitialFile.slice(
    0,
    pathToInitialFile.split('').lastIndexOf('/')
  );
  const finalDirectory = pathToFinalFile.slice(
    0,
    pathToFinalFile.split('').lastIndexOf('/')
  );

  if (inititalDirectory === finalDirectory) {
    return;
  }

  fs.writeFileSync(pathToFinalFile, content);
  fs.unlinkSync(pathToInitialFile);
};

const [pathToStartFile, pathToFinishFile] = process.argv.slice(2);

copy(pathToStartFile, pathToFinishFile);
