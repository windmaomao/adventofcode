# "Keep" index after array filter

`ES6` adds quite a bit functionalities to array with `map`, `filter` etc. They are extremely handy, but I start to have trouble keeping track of the indexes. 

For instance

```javascript
arr.filter(v => v == 3)
```

We can find out if there's a specific element that we need, however once it's filtered, we lost its original index. Therefore we tend to use `indexOf`. But the point here is that we do want to filter, at the same time we need to have additional properties to be preserved during the process.

In order to do that, we could do

```javascript
arr
  .map((v, i) => ({ v, i }))
  .filter(t => t.v == 3)
```

> In other language, we see utilities such as filterMap and add_indexes to address this problem. More or less we extend the original structure by adding the index.

## Simple way

But what if I don't want to change array structure, instead we use another array for indexes,

```javascript
const is = arr.map((_, i) => i)
```

Then we can write in an old fashion way,

```javascript
is.filter(i => arr[i] == 3)
```

Basically we start with the index instead of value, assuming we can always access the original `arr`. There’s a bit counter-intuitive here, since one of the reason we use `filter` is to hide `arr`. But I felt there's no point of the hiding here, unless you don't want to take advantage of the random access feature of array. This way, you keep track of two continuous memory spaces, one for the value and one for the index. *You can join these two spaces if you really want to.*

## Conclusion

Instead of asking the question of “keeping” the index, we start with the index. IMHO this is relatively simple without overthinking of blending the value and index together to favor the information hiding.

This will become especially more important when we go into higher dimensional spaces, where using indexes in a continuous memory space is much more efficient than the value-first-index-later approach, if speed is your concern.