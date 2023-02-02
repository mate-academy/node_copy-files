'use strict';

const { params } = require('./params');
const fs = require('fs');

module.exports.getCallbackFrom = (callTerminal) => {
  return (pathFromTerminal) => {
    if (!fs.existsSync(pathFromTerminal)) {
      callTerminal('the file does not exist try one more time ');

      return;
    }

    params.from = pathFromTerminal;

    callTerminal(
      'please enter a relative path to the place you wanna copy the file '
    );
  };
};
