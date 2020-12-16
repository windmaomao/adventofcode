# Javascript memory for large array

> The price we have to pay for not having strong type?

This is a very nice `ES6` syntax that creates an array of certain length. 

```javascript
arr = new Array(n).fill(0)
```

Simple as it is, it has some issues, ex. if you don't initialize it before use it, you'll run into surprises, thus the `fill` afterwards.

But even with `fill`, you don't know how much memory you actually need until you initialize the values later.

This becomes problematic when I try the following on my laptop. It chokes without giving any error message. 

```javascript
n = 36000000
```

 When I dig into it, it tries to find available memory, and settles with `2.6G`, and then I calculate the bytes per number,

```javascript
bpn = 3 * 1000 / 36 = 83 bytes
```

This seems to be outrageous, not only it requested far  more memory I anticipated behind the scene, but also it took `16s` to finish the initialization. Can you believe that?

## Size

So suppose I only want to deal with an 32-bit unsigned integer (go up to `4294967295`)

```javascript
arr = new Uint32Array(n).fill(0)
```

Then the memory reduces to `162.8M`, 

```javascript
bpn = 162.8 * 1.024 *1.024 / 36 = 4.74 bytes
```

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

I'll leave the rest of calculation to the reader, but a common sense is that `100MB` can hold `1M` data without too much problem in general. 

## Price

Maybe you think this is some price we have to pay for not having a strong type on the front. It becomes more problematic if we extend to pre-allocate memory for `Map` or `Object`. The key and value could be nested `Object`. It would be a mission impossible to pre-calculate them. 

So one interesting conclusion I can draw here is that for **serious** computational work, we probably should  be more careful with `Javascript`. Here `serious` is a strong word, you need to be dealing with at least one million record in memory at peak time. If you can stay below that number most of the time, you should be still safe :) 






