### Part 2 - Stop after the match

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

You might already notice `asSequence` in the above. It's here for saving us going over the entire list. Right after we have a match via `indexOf`, it'll stop. Bingo! Saving us to write a `while` here.

>  You might wonder why we can not use `sum` after `asSequence`. The short answer is that `sum` produces `Int` instead of `sequence` , which prevents us taking advantage of sequence of deferring mechanism.


#### Test

```kotlin
val ops = extractOps(parseFile("01")[0])

@Test fun day01Part2() { 
  assertEquals(???, part2(ops))
}
```
