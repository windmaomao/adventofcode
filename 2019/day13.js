const filereader = require('./utils/filereader')
const raw = filereader.readFile('day13.data', ',', true)
const print = require('debug')('day13:')

print(raw)