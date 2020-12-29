# Reduce until run in Javascript

After `ES6`, we tend to use `map`, `filter` a lot. And sometimes if we really need to get hands dirty, we can use `reduce` where we take an initial state and reduce it to next state going through all elements.

Looping through the entire array can be a bit expensive, especially when you want to stop when certain condition is met. This conditional reduce can be implemented using a Lazy library, where each element traverse is deferred till needed, therefore only loops to the point when a match is found. So how do we do this in a classical way without knowing what Lazy is?

## Problem 1d

If you can go up or down one floor at a time, stated in an array [1,1,-1,-1,-1,1,1,1], when will you reach the basement `-1` starting from floor `0`. 

```Javascript
// advent of code 2015, day 1
[1,1,-1,-1,-1,1,1,1].run(
	(acc, v) => acc + v, 0,
	acc => acc == -1
)
```

Wish we could have a function `run` like that, similar to `reduce` only with additional `until` function.

```javascript
const run = (arr, fn, init, until = () => false) => {
	let i = 0, acc = init, done = false, n = arr.length
	while (i < n && !done) {
		acc = fn(acc, arr[i], i, arr)
		done = until(acc, arr[i], i, arr)
		i++
	}
	return [acc, i]
}

Array.prototype.run = function (fn, init, until) {
  return run(this, fn, init, until)
}
```

By default `until` function return `false`, thus it behaviors exactly like `reduce` does. But when it returns true, it'll finish the loop early and return the last state and index, as in a `[acc, i]` pair. Pretty handy, huh?

## Problem N-d

The power of  `reduce` and `run` doesn't stop at one dimensional array for sure.  Consider to find out what are the two numbers in [1721,979,366,299,675,1456] that add up to `2020`. 

Imagine that we can have a similar function `runN` that iterates through a multi dimensional array, in our case the same array twice so that we can test two numbers in each iteration.

```javascript
// advent of code 2020, day 1
let N = 2
new Array(N).fill(0)
  .map(v => [1721,979,366,299,675,1456])
  .runN(
    (acc, vs) => vs, null, 
    acc => (acc.sum() == 2020)
  )
```

> Here `Array.sum` is a utility function which adds numbers together from all elements, basically another reduce call `reduce((acc, v) => acc + v, 0)`. It's easier to read this way.

If you set `N = 2`, we'll find out two numbers. And what if we need to find out which three numbers that sum up to be `2020`. Yeah you guessed right, just change `N = 3`. Wow, how powerful is that in terms of semantic writing? Of course not the speed :)

Ok now is the implementation of `runN` which is very similar in structure as the previous version, whereas the complex part is more from how to do multiple loops in a non nested way.

```javascript
const runN = (arr, fn, init, until = () => false) => {
	let re = 0, acc = init, done = false, d = arr.length
	const is = new Array(d).fill(0)
	
	while (re < 1 && !done) {
		
		value = is.map((k, j) => {
			const dn = arr[j].length
			if (dn < 1) return undefined
			return arr[j][k]
		})
		
		acc = fn(acc, value, is, arr)
		done = until(acc, value, is, arr)
		if (done) continue
		
		let j = d - 1
		re = 1
		while (j >=0 && re > 0) {
			const dn = arr[j].length
			if (dn < 1) { j--; continue }
			is[j]++
			if (is[j] == arr[j].length) {
				is[j] = 0
				j--
			} else {
				re--
			}
		}
	}
	return [acc, is]
}

Array.prototype.runN = function (fn, init, until) {
  return runN(this, fn, init, until)
}
```

> Performance wise, this multi-loop approach isn't the best one for this classical problem, since it's in the order of `O(n^N)`, `n` being the length of the array. Therefore here we’re only focusing on the semantics to favor the logic sense, which is inspired more or less by `Haskell`.

## Summary

We extend `reduce` with an additional `until` function to adjust when the loop can be finished. And then we apply `run` and `runN` to both 1-d and N-d problems and observe that the process can be drastically simplified.





