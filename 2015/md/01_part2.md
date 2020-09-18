### Part 2 - Scan to find it

#### Problem

Given a position `-1`, find out how many operations you need to take to get there.  

Ex.

- `())` reaches with `3` steps.
- `(())((())))` reaches with `11` steps.

#### Solution

```kotlin
fun part2(ops: List<Int>): Int = ops.asSequence()
  .scan(0) { acc, v -> acc + v }
  .indexOf(-1)
}
```

The problem is a bit different from the previous `sum`, because we need to keep track of the intermediate result for each step so to know if we reach the destination.

Therefore we use one variantion of `reduce` (implementation of `sum`), to `scan` the collection and store all snapshots of answers while adding each item up.

You might already notice `asSequence` in the above. It's here for saving us going over the entire list, so that `indexOf` can terminate the `scan` right after it makes a match. 


#### Test

```kotlin
val ops = extractOps(parseFile("01")[0])

@Test fun day01Part2() { 
  assertEquals(???, part2(ops))
}
```
