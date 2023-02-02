'use strict';

const { callTerminal } = require('./callTerminal');

function app() {
  callTerminal('please enter a relative path to the file you wanna copy ');
}

app();
