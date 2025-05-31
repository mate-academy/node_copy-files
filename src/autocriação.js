'use strict';

const fs = require('fs');
const path = require('path');

const logger = {
  info: (message) => process.stdout.write(`${message}\n`),
  error: (message) => process.stderr.write(`ERROR: ${message}\n`),
  success: (message) => process.stdout.write(`✔ ${message}\n`),
};

function initFileIfNotExists(fileName, content = 'Conteúdo inicial') {
  if (!fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, content);
    logger.info(`Arquivo ${fileName} criado automaticamente`);

    return true;
  }

  return false;
}

function copyFileWithAdditionalContent(sourcePath, targetPath, extraContent) {
  try {
    process.chdir(path.join(__dirname, '../'));

    const created = initFileIfNotExists(sourcePath);

    if (created) {
      logger.success(`Arquivo ${sourcePath} criado automaticamente`);
    }

    fs.copyFileSync(sourcePath, targetPath);
    logger.success(`${sourcePath} copiado para ${targetPath}`);

    if (extraContent) {
      fs.appendFileSync(targetPath, `\n${extraContent}`);
      logger.success('Conteúdo adicional inserido');
    }

    return fs.readFileSync(targetPath, 'utf-8');
  } catch (err) {
    logger.error(err.message);
    process.exit(1);
  }
}

module.exports = {
  initFileIfNotExists,
  copyFileWithAdditionalContent,
};
