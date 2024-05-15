// 5/15/24
function promisify(callback) {
  return function (...args) {
    const that = this;
    return new Promise((res, rej) => {
      const handle = (error, value) => {
        if (error) {
          rej(error);
        } else {
          res(value);
        }
      };

      callback.call(that, ...args, handle);
    });
  };
}

function adder(x, y, handle) {
  const v = x + y;
  if (typeof v !== "number") {
    const error = "Not a number";
    handle(error, null);
  } else {
    handle(null, v);
  }
}

const p = promisify(adder);
p(1, 2).then(console.log).catch(console.error);
p("1", 2).then(console.log).catch(console.error);
