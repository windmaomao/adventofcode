const indexOf = (arr, minOrMax) => 
(minOrMax !== 'max') ?
  arr.indexOf(Math.min.apply(Math, arr)) :
  arr.indexOf(Math.max.apply(Math, arr))

module.exports = indexOf