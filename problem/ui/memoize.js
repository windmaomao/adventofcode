// 5/17/24
function memoize(callback, resolver) {
  let m = {};
  const getKey = (...args) =>
    resolver ? resolver(...args) : JSON.stringify(args);

  function resolve(...args) {
    const key = getKey(...args);
    if (key in m) return m[key];

    m[key] = callback(...args);
    return m[key];
  }

  resolve.clear = () => {
    m = {};
  };
  resolve.delete = (...args) => {
    const key = getKey(...args);
    if (key in m) {
      delete m[key];
    }
  };
  resolve.has = (...args) => {
    const key = getKey(...args);
    return key in m;
  };

  return resolve;
}
