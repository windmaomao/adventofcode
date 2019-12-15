const filereader = require('./utils/filereader')
const raw = filereader.readFile('day15.data', '\n')
const debug = require('debug')('day15:')

debug(raw)
