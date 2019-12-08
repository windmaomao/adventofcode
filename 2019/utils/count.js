const count = (arr, search) =>
  arr.reduce((acc, v) =>
    v === search ? ++acc : acc
  , 0)

module.exports = count