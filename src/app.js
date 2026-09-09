'use strict';

const path = require('path');
const fs = require('fs/promises');

async function copyArch() {
  const meusArgumentos = process.argv.slice(2); // ['arq.tx', 'copia.txt']

  if (meusArgumentos.length !== 2) {
    // eslint-disable-next-line no-console
    console.error('The number of arguments is different from two.');

    return;
  }

  const [arquivo, destino] = meusArgumentos;

  const caminhoOrigemAbs = path.resolve(arquivo);
  const caminhoDestinoAbs = path.resolve(destino);

  /* const dadosOrigem = path.parse(caminhoOrigemAbs);
  const dadosDestino = path.parse(caminhoDestinoAbs); */

  /* const origemSemExtensao = path.join(dadosOrigem.dir, dadosOrigem.name);
  const destinoSemExtensao = path.join(dadosDestino.dir, dadosDestino.name); */

  if (caminhoOrigemAbs === caminhoDestinoAbs) {
    return;
  }

  try {
    const stats = await fs.stat(caminhoOrigemAbs);

    if (stats.isFile() === false) {
      // eslint-disable-next-line no-console
      console.error('Not a file');

      return;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('The file does not exist or cannot be accessed.', error);

    return;
  }

  try {
    const destinoStats = await fs.stat(caminhoDestinoAbs);

    if (destinoStats.isDirectory()) {
      // eslint-disable-next-line no-console
      console.error('It cannot be a directory.');

      return;
    }
  } catch (error) {
    // Apenas deixe o código sair do bloco e continuar para a cópia.
  }

  try {
    await fs.copyFile(caminhoOrigemAbs, caminhoDestinoAbs);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error when copying file', error);
  }
}

copyArch();

module.exports = { copyArch };
