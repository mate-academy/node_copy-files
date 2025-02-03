const { copyFile } = require('./copyFile');

const [, , source, destination] = process.argv;

copyFile(source, destination);
