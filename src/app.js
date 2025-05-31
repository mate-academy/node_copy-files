'use strict';

const { copyFileWithAdditionalContent } = require('./autocriacao');
const path = require('path');
const fs = require('fs');

const logger = {
  info: (message) => process.stdout.write(`${message}\n`),
  error: (message) => process.stderr.write(`ERROR: ${message}\n`),
  success: (message) => process.stdout.write(`✔ ${message}\n`),
};

function validateInputs(src, dest) {
  if (!src || !dest) {
    throw new Error('Por favor forneça caminhos de origem e destino');
  }

  if (src === dest) {
    throw new Error('Origem e destino não podem ser iguais');
  }

  if (!fs.existsSync(src)) {
    throw new Error(`Arquivo de origem não encontrado: ${src}`);
  }

  if (fs.statSync(src).isDirectory()) {
    throw new Error('O caminho de origem é um diretório');
  }

  if (fs.existsSync(dest) && fs.statSync(dest).isDirectory()) {
    throw new Error('O caminho de destino é um diretório');
  }
}

function main() {
  try {
    const [, , srcFile, destFile, extraContent] = process.argv;

    validateInputs(srcFile, destFile);
    process.chdir(path.join(__dirname, '../'));

    const result = copyFileWithAdditionalContent(
      srcFile,
      destFile,
      extraContent,
    );

    logger.success('Operação concluída:');
    logger.info(result);
  } catch (err) {
    logger.error(err.message);
    process.exit(1);
  }
}

main();
