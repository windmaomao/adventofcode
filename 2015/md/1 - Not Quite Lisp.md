## Kotlin Day `1` - Not Quite Lisp

> From Advent of Code 2015, [*Day `1`*](https://adventofcode.com/2015/day/1)



```
()()(()()()(()()((()((()))((()((((()()((((((
)()(()()()(()()((()((()))((()((((()()((((())
)()((((())(((((((()(((((((((()(((())(()()(()
((()()(()(())(()((((()((()()()((((())(((((((
)(()(((()())(()((((()))())(())(()(()()))))))
```

The longest journey we make

is the sixteen inches

from our heads to our hearts, 

or a stair?

---

### Modal

Map each character as an integer value.

```kotlin
fun charValue(c: Char): Int = when (c) {
  '(' -> 1
  ')' -> -1
  else -> 0
}
```

> In order to convert a list of string (or char) into the models, we can simply apply the `map` as shown in [*Day `0`*](https://medium.com/@windmaomao/kotlin-day-0-dusk-till-dawn-b1696e311181).

### Part 1

Starting from position `0`, find out the position after a series of up and down operations. 

```kotlin
fun part1(ops: List<Int>) = ops.sum()
```


### Part 2

Given a position `-1`, find out how many operations you need to take to get there.

```kotlin
fun part2(ops: List<Int>): Int = ops.asSequence()
  .scan(0) { acc, v -> acc + v }
  .indexOf(-1)
}
```

The problem is a bit different from the previous `sum`, because we need to keep track of the intermediate result for each step so to know if we reach the destination.

You might already notice `asSequence` in the above. It's here for saving us going over the entire list. Right after we have a match via `indexOf`, it'll stop. Bingo! Saving us write a `while` here.

>  You might wonder why we can not use `sum` after `asSequence`. The short answer is that `sum` produces `Int` instead of `sequence` , which prevents us taking advantage of sequence of deferring mechanism.

### Highlights

- How to use number to model the stream of data?
- How to return from the loop right away?

---

*Now, ready for the next day?* [*Day `2` — I was told there would be no math*](https://medium.com/@windmaomao/kotlin-day-2-i-was-told-there-would-be-no-math-ec0f9e1064cc)

*Or, revisit the previous day?* [*Day `0` — Dusk till Dawn*](https://medium.com/@windmaomao/kotlin-day-0-dusk-till-dawn-b1696e311181)

*For Complete source code, please visit* [*AoC 2015 Kotlin*](https://github.com/windmaomao/adventofcode/tree/master/2015/kt/src/test/kotlin/org/adventofcode)*.*