'use strict';

const { customCopyFile } = require('./modules/customCopyFile');

const [sourceFile, destinationFile] = process.argv.slice(2);

customCopyFile(sourceFile, destinationFile);
