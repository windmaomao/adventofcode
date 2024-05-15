// 5/15/24 first time pass, man!
function debounce(callback, delay, immediate) {
  let handler;

  function debounced() {
    if (handler) {
      clearTimeout(handler);
    } else {
      if (immediate) {
        callback.apply(this, arguments);
      }
    }
    handler = setTimeout(() => {
      if (immediate) {
        handler = null;
      } else {
        callback.apply(this, arguments);
      }
    }, delay);
  }

  return debounced;
}
