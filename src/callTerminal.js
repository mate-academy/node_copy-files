'use strict';

const { copyFile } = require('./copyFiles');
const readline = require('readline');
const { params } = require('./params');
const { getCallbackFrom } = require('./getCallbackFrom');
const { getCallbackTo } = require('./getCallbackTo');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function callTerminal(message) {
  if (params.done) {
    terminal.question(message, () => { });
    terminal.close();

    return;
  }

  if (!params.from) {
    terminal.question(message, getCallbackFrom(callTerminal));

    return;
  }

  if (!params.to) {
    terminal.question(message, getCallbackTo(callTerminal));

    return;
  }

  if (params.from && params.to) {
    copyFile(params.from, params.to);
    params.done = true;
    callTerminal('done');
  }
}

module.exports.callTerminal = callTerminal;
