#!/usr/bin/env node
/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

function main() {
  const args = process.argv.slice(2);

  if (args.length !== 2) {
    console.error('Two arguments required: source and destination');

    return;
  }

  const [source, destination] = args;

  const sourcePath = path.resolve(source);
  const destinationPath = path.resolve(destination);

  if (sourcePath === destinationPath) {
    return;
  }

  let sourceStat;

  try {
    sourceStat = fs.statSync(sourcePath);
  } catch (e) {
    console.error('Source file does not exist');

    return;
  }

  if (!sourceStat.isFile()) {
    console.error('Source must be a file');

    return;
  }

  try {
    const destStat = fs.statSync(destinationPath);

    if (destStat.isDirectory()) {
      console.error('Destination must be a file');

      return;
    }
  } catch (e) {
    // destination doesn't exist -> OK
  }

  try {
    fs.copyFileSync(sourcePath, destinationPath);
  } catch (e) {
    console.error(e.message);
  }
}

main();
