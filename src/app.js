'use strict';

const { checkSamePath } = require('./fs-helpers/checkSamePath');
const { copyFile } = require('./fs-helpers/copyFile');

const [ source, destination ] = process.argv.slice(2);

if (checkSamePath(source, destination)) {
  process.exit();
}

copyFile(source, destination);
