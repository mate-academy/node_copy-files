'use strict';

const { params } = require('./params');
const fs = require('fs');
const path = require('path');

module.exports.getCallbackTo = (callTerminal) => {
  return (pathFromTerminal) => {
    const dir = pathFromTerminal
      .split('/')
      .slice(0, -1)
      .join('/');

    if (!fs.existsSync(dir)) {
      callTerminal('the file does not exist try one more time ');

      return;
    }

    if (path.resolve(params.from) === path.resolve(pathFromTerminal)) {
      const message = 'you\'re trying to rewrite the same file,'
        + 'please enter another relative path ';

      callTerminal(message);

      return;
    }

    params.to = pathFromTerminal;

    callTerminal();
  };
};
