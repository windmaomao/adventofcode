// Works like a Map/dictionary/hashtable, but each key is a tuple of 1 or 2 elements e.g. [1, 2] or ['a']
// Tuple elements can be both primitive and reference types
// A key in the TupleMap may only occur once; it is unique in the TupleMap's collection
// Tuples are considered equal when all elements are in the same order and strictly equal to each other

const {
  MetaProperty,
} = require("coffeescript/lib/coffeescript/nodes")

// PLAN
// 1) One/Two items in the tuple,
// 2) new map()
// 3) m[a] = new Map()
// 4) m[a][b]
// 5) value or map on the last chain

// any value could be a value or a Map object
{
  value: undefined
  children: new Map()
}

// On delete
// on any level
// -> no children
// -> delete this map[parent]
// -> bail out

// BONUS: support tuples of arbitrary length
class TupleMap {
  m = new Map()

  // Adds (key, value) pair to the TupleMap
  // Returns current instance of the TupleMap
  set(key, value) {
    let n = this.m,
      k
    for (let i = 0; i < key.length - 1; i++) {
      k = key[i]
      if (n.has(key[i])) {
        n = this.m.get(k).children
      } else {
        n = new Map()
        this.m.set(k, {
          children: n,
        })
      }
    }
    k = key[key.length - 1]
    n.set(k, {
      value,
      children: new Map(),
    })

    return this
  }
  // Returns value for the specified key
  // Returns undefined if key doesn't exists
  get(key) {
    let n = this.m,
      k
    for (let i = 0; i < key.length - 1; i++) {
      k = key[i]
      if (n.has(key[i])) {
        n = this.m.get(k).children
      } else {
        n = new Map()
        this.m.set(k, {
          children: n,
        })
      }
    }
    k = key[key.length - 1]
    if (!n.has(k)) {
      return undefined
    } else {
      return n.get(k).value
    }
  }
  // Removes (key, value) pair
  // Must return removed value if the key existed and undefined otherwise
  delete(key) {}
}

const dict = new TupleMap()

function assert(isSuccess, testCase) {
  if (isSuccess) {
    console.log(`✅ Success: Test case ${testCase}`)
  } else {
    console.error(`❌ Failure: Test case ${testCase}`)
  }
}

/* Primitive values */
dict
  .set([1, 2], 0)
  .set([1, 2], 1)
  .set([1, 3], 2)
  .set([1, "3"], 3)
  .set(["a"], 4)
  .set(["a", "b"], 5)

assert(dict.get([1, 2]) === 1, "#1")
assert(dict.get([1, 3]) === 2, "#2")
assert(dict.get([1, "3"]) === 3, "#3")
assert(dict.get(["a"]) === 4, "#4")
assert(dict.get(["a", "b"]) === 5, "#5")

/* Primitive and reference values */
const obj1 = { data: 1 }
const obj2 = { data: 2 }
const obj3 = { data: 2 }

dict
  .set(["a", obj1], "a")
  .set(["a", obj2], "b")
  .set(["a", obj3], "c")

assert(dict.get(["a", obj1]) === "a", "#6")
assert(dict.get(["a", obj2]) === "b", "#7")
assert(dict.get(["a", obj3]) === "c", "#8")
// console.log(dict.m)
/* 
   ANOTHER BONUS:
   TupleMap should be compatible with for ... of loop to iterate
   through all (key, value) pairs.
   for(let kv of dict) {
       console.log(kv.key + ', ' + kv.value);
   }
   Example output:
   [1, 2, 3], 1
   [1, 2, 4], 2
   ['a'], 3
   ['a', 'b'], 4
*/

TTAN
