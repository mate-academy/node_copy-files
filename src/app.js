/* eslint-disable no-console */
const fs = require('fs');

const [sourcePath, destinationPath] = process.argv.slice(2);

const copyfile = () => {
  if (!sourcePath || !destinationPath) {
    console.error('No source or destination provided');

    return;
  }

  if (sourcePath === destinationPath) {
    console.error('The paths are identical');

    return;
  }

  const isExistSource = fs.existsSync(sourcePath);

  if (!isExistSource) {
    console.error('Non-existent source file');

    return;
  }

  fs.copyFile(sourcePath, destinationPath, (err) => {
    if (err) {
      console.error('Something went wrong during the file copy operation:');
      console.error(err); // Логування об'єкта помилки для детального аналізу

      return;
    }

    console.log(
      `File copied successfully from ${sourcePath} to ${destinationPath}`,
    );
  });
};

copyfile();
