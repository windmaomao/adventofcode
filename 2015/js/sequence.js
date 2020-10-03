import Lazy from 'lazy.js'

// New
Array.prototype.generate = function (fn, length) {
  return Lazy.generate(fn, length)
}

