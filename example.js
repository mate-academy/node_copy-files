import { copyFile } from './src/app.js';

async function runExample() {
  console.log('Exemplo de cópia de arquivo:');

  const result = await copyFile('files/readCopy.txt', 'files/readCopy2.txt');

  if (result.success) {
    console.log('✅ Sucesso:', result.message);
    console.log(`Origem: ${result.source}`);
    console.log(`Destino: ${result.destination}`);
  } else {
    console.error('❌ Falha:', result.message);
  }
}

runExample();
