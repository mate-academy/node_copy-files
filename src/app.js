import fs from 'fs/promises';
import rl from 'readline';

const terminal = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getLocation = filepath => {
  if (!filepath.includes('/')) {
    return './';
  }

  return filepath.slice(0, filepath.lastIndexOf('/') + 1);
};

const promptSrc = () => {
  const findSource = (src) => {
    if (!src) {
      promptSrc();
    }

    const promptDest = () => (
      terminal.question('Enter copy destination: ', createCopy)
    );

    const createCopy = (dest) => {
      if (getLocation(src) === getLocation(dest)) {
        console.log('Destination can\'t be the same as the source');
        promptDest();

        return;
      }

      fs.copyFile(src, dest)
        .then(() => console.log('File copied successfully'))
        .catch(console.log)
        .finally(terminal.close);
    }

    promptDest();
  }

  terminal.question('Enter source path: ', findSource);
}

promptSrc();
