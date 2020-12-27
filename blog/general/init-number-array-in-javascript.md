# Initialize number array in Javascript

Create an array in Javascript isn't 100% straightforward as in other languages. Although on the surface it does seem simple, and most of the online tutorial can put you in the right (working direction). Does it occur to you it's not well designed?

Consider the following array statement, what’s odd is that

```javascript
const a = new Array(10)
```

- the elements aren't initialized, so you can't apply `map` right away
- the element type has to be resolved after the `fill`

There're many library (even `ES6`) extending the array functionalities, but they rarely talk about the definition or the initialization of the array. Things seem to be just born as that.

Over the years of solving practical problem, I tend to ask myself to write a more practical array statement like below,

```javascript
const a = array(10, 3, Uint16Array)
```

Just to be more precise,

```javascript
const array = (n, v = i => i, T = Array) => {
	const arr = new T(n).fill(0)
	if (v === undefined) return arr
	const isFn = typeof v === 'function'
	return arr.map(isFn ? (_, i) => v(i) : _ => v)
}
```

Let's see if we can address some problems with it

- use element index as its default value
- can assign custom initial value (or function)
- can set element type with fixed size (see appendix)

```javascript
const N = 10000000
const a = array(N) // [0,1,2]
const a = array(N, i => i + 1)  // [1,2,3]
const a = array(N, 3, Uint16Array) // [3,3,3]
```

If you use this definition, you'll end up with less trouble initializing it with the right size.

> Be care trying large N, one million (with six zeros) should be ok, but eight zeros above will most likely give you hard time. A common sense here is that if you can't handle one million, you seriously have a problem (bug) in your program.

#### Appendix

You can check the following table to get an idea how much memory you need to hold 1 million records of a fixed type. 

| Type      | Lower       | Upper      | Bytes | 1M   |      |
| --------- | ----------- | ---------- | ----- | ---- | ---- |
| Int8      | -128        | 127        | 1     | 1MB  |      |
| Uint8     | 0           | 255        | 1     | 1MB  |      |
| Int16     | -32768      | 32767      | 2     | 2MB  |      |
| UInt16    | 0           | 65535      | 2     | 2MB  |      |
| Int32     | -2147483648 | 2147483647 | 4     | 4MB  |      |
| UInt32    | 0           | 4294967295 | 4     | 4MB  |      |
| Float32   | 1.2x10^-38  | 3.4x10^38  | 4     | 4MB  |      |
| Float64   | 5x10^-324   | 1.8x10^308 | 8     | 8MB  |      |
| BigInt64  | -2^63       | 2^63-1     | 8     | 8MB  |      |
| BigUInt64 | 0           | 2^64-1     | 8     | 8MB  |      |

![https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays](https://mdn.mozillademos.org/files/8629/typed_arrays.png)

You can also use the following line to better understand the memory used.

```javascript
const used = process.memoryUsage();
for (let key in used) {
	console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
}
```

