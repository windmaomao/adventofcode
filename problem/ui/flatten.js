function flattenArr(value) {
  if (!Array.isArray(value)) return value;

  let res = [];
  for (let v of value) {
    const f = flattenArr(v);
    if (Array.isArray(f)) {
      res = res.concat(f);
    } else {
      res.push(f);
    }
  }

  return res;
}

//console.log(flattenArr([1,2,3]))
//console.log(flattenArr([1,2,[1,3]]))
//console.log(flattenArr([1,2,[3,4,[5,6]]]))

function flattenObj(value) {
  if (!(value instanceof Object)) return value;

  let obj = {};
  for (let k in value) {
    const f = flattenObj(value[k]);
    if (f instanceof Object) {
      for (let m in f) {
        obj[m] = f[m];
      }
    } else {
      obj[k] = value[k];
    }
  }

  return obj;
}

//console.log(flattenObj({ a: 1, b: 2 }))
//console.log(flattenObj({ a: 1, b: { c: 2, d: 3, e: {f: 4 } } }))

const isArray = (arr) => Array.isArray(arr);
const isObject = (obj) => obj instanceof Object && !isArray(obj);

function flatten(value) {
  if (!isObject(value) && !isArray(value)) return value;

  if (isArray(value)) {
    let res = [];
    for (let v of value) {
      const f = flatten(v);
      if (isArray(f)) {
        res = res.concat(f);
      } else {
        res.push(f);
      }
    }

    return res;
  }

  if (isObject(value)) {
    let obj = {};
    for (let k in value) {
      const f = flatten(value[k]);
      if (isObject(f)) {
        for (let m in f) {
          obj[m] = f[m];
        }
      } else {
        obj[k] = f;
      }
    }

    return obj;
  }
}

console.log(flatten([1, 2, [3, 4]]));
console.log(flatten({ a: [1, 2, [3, 4]] }));
console.log(flatten([{ a: 1, b: { c: 2, d: 3 } }]));
