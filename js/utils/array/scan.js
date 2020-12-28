// https://github.com/lodash/lodash/issues/1684
function scan(array, fn, seed, thisArg) {
  if (thisArg) fn = fn.bind(thisArg);
  var size = array.length,
    i,
    accumulator,
    results;
  if (seed !== void 0) {
    results = Array(size + 1);
    accumulator = seed;
    for (i = 0; i < size; ++i) {
      results[i] = accumulator;
      accumulator = fn(accumulator, array[i]);
    }
    results[i] = accumulator;
  } else {
    results = Array(size);
    accumulator = results[0] = array[0];
    for (i = 1; i < size; ++i) {
      results[i] = accumulator = fn(accumulator, array[i]);
    }
  }
  return results;
}

module.exports = scan