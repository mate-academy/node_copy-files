/* eslint-disable no-console */
'use strict';
import { cp } from 'node:fs/promises';

const [from, to] = process.argv.slice(2);

if (from !== to) {
  try {
    await cp(from, to);
  } catch (error) {
    console.error(error);
  }
}
