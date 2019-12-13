const fs = require('fs')

function readfile(fn) {
  return fs.readFileSync('DATA', 'utf8');
}

module.exports = readfile