// 5/15/24
Array.prototype.myMap = function (callback) {
  const arr = this;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(callback(arr[i], i, arr));
  }
  return res;
};

Array.prototype.myFilter = function (callback) {
  const arr = this;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr) === true) {
      res.push(arr[i]);
    }
  }
  return res;
};

Array.prototype.myReduce = function (callback, initialValue) {
  const arr = this;
  let acc = initialValue;
  for (let i = 0; i < arr.length; i++) {
    if (initialValue === undefined && i == 0) {
      acc = arr[0];
    } else {
      acc = callback(acc, arr[i], i, arr);
    }
  }
  return acc;
};
