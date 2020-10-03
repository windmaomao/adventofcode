import Lazy from 'lazy.js'

// http://danieltao.com/lazy.js/docs/#Lazy-generate
Array.prototype.generateSequence = function (fn, length) {
  return Lazy.generate(fn, length)
}

// http://danieltao.com/lazy.js/docs/#Lazy
Array.prototype.asSequence = function () {
  return Lazy(this)
}

