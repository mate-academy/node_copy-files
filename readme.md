# Copy files

**Read [the guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md) before start**

Write an app that will copy a file from one specified location to another like
Linux cp command: `cp file.txt file-copy.txt`.
- It must do nothing in case the user is trying to copy to the same location.
- The app must support only copying of files, and no additional options (flags). Plain copying of files.




  ## How to use:
  - run `node <path> /app.js arg_1 arg_2` or `npm run copy arg_1 arg_2` in root folder.
- The first argument is the source path like `./folder/file.name` and the second - is the destination folder. It can be copied between drivers: `/<driver name>/<rest path>` or `<driver name>:/<rest path>`.
