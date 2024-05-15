Function.prototype.myCall = function (thisContext, ...args) {
  const k = Symbol();
  thisContext[k] = this;
  const res = thisContext[k](...args);
  delete thisContext[k];
  return res;
};

Function.prototype.myApply = function (thisContext, arguments = []) {
  return this.myCall(thisContext, ...arguments);
};

Function.prototype.myBind = function (thisContext, ...args) {
  return (...arguments) => {
    return this.myCall(thisContext, ...args, ...arguments);
  };
};

function hello(s) {
  console.log("hello " + s);
}

hello.myCall({}, "fang");
hello.myApply({}, ["fang"]);
const hello2 = hello.myBind({}, "jin");
hello2();
