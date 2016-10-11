#!/usr/bin/env node

const findRemove = require('find-remove');
const path = require('path');
const spawn = require('cross-spawn');
const script = process.argv[2];

switch(script) {
  case 'start':
    findRemove(path.join(process.cwd(), 'src'), { extensions: '.css' });

    const reactScripts = spawn('react-scripts', ['start'], {
      stdio: 'inherit'
    });

    const sassBuild = spawn('node-sass', ['src', '--output', 'src'], {
      stdio: 'inherit'
    });

    const sassWatch = spawn('node-sass', ['src', '--watch', '--output', 'src'], {
      stdio: 'inherit'
    });

    break;

  default:
    console.log('Unknown script: ' + script);
    console.log('Perhaps you meant to run `react-scripts` or `react-scripts-with-sass start`');
    break;
}
