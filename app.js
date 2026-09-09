#!/usr/bin/env node
/* eslint-disable no-console */
'use strict';

function ensureNode20Plus() {
  const major = Number(String(process.versions.node).split('.')[0]);

  if (!Number.isFinite(major) || major < 20) {
    console.error('Node.js v20 or higher is required to run this CLI.');
    process.exit(1);
  }
}

ensureNode20Plus();

const fs = require('fs');
const path = require('path');

function die(msg) {
  console.error(msg);
  process.exit(1);
}

const args = process.argv.slice(2);

if (args.length !== 2) {
  die('Two arguments required: source and destination');
}

const [source, destination] = args;

const sourcePath = path.resolve(source);
const destinationPath = path.resolve(destination);

if (sourcePath === destinationPath) {
  process.exit(0);
}

let sourceStat;

try {
  sourceStat = fs.statSync(sourcePath);
} catch {
  die('Source file does not exist');
}

if (!sourceStat.isFile()) {
  die('Source must be a file');
}

try {
  const destStat = fs.statSync(destinationPath);

  if (destStat.isDirectory()) {
    die('Destination must be a file');
  }
} catch (e) {
  if (e && e.code && e.code !== 'ENOENT') {
    die(e.message);
  }
}

try {
  fs.copyFileSync(sourcePath, destinationPath);
} catch (e) {
  die(e.message);
}
