### Part 2 - Stop while you are there

#### Problem

Given a position, find out how many operations you need to perform from the list to reach there.  

Ex.

- `^vv` takes 3 steps to reach position `-1`.
- `vv^^^^` takes 6 steps to reach position `4`.

#### Solution

```kotlin
  fun part2(s: String, pos: Int = -1): Int {
    var i = 0
    var v = 0
    while(v != pos) {
      v += charValue(s[i])
      i++
    }
    return i
  }
```

Instead of the previous part, we need an intermediate variable `v` to keep track of the position so to compare with given position. And we use another index variable `i` to keep track of the steps taken. 

> In order to break from a list (or loop, or stream), we can use `break`,  `while` or similar flow control. More or less  an `if` is introduced in the middle of the process. 

#### Test

```kotlin
  @Test fun day02Part2Example() {
    assertEquals(1, d.part2(")"))
    assertEquals(5, d.part2("()())"))
  }

  @Test fun day01Part2() {
    assertEquals(1797, d.part2(d.getLine()))
  }
```
