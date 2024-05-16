// 5/15/24 with reading from solution 2
function throttle(callback, delay) {
  let prevArgs = null;
  let handle = null;
  let that;

  const fire = () => {
    callback.call(that, ...prevArgs);
    prevArgs = null;
    handle = setInterval(() => {
      if (prevArgs) {
        callback.call(that, ...prevArgs);
        prevArgs = null;
      } else {
        handle = clearInterval(handle);
      }
    }, delay);
  };

  function throttled() {
    that = this;
    prevArgs = arguments;
    if (!handle) fire();
  }

  throttled.cancel = () => {
    prevArgs = null;
  };

  return throttled;
}

// Do not edit the line below.
exports.throttle = throttle;

const fn = (x) => {
  console.log(x);
};

console.log("start ...");
const d = throttle(fn, 2000);
d(1);
d(1);
d(3);
d(1);
d(5);
