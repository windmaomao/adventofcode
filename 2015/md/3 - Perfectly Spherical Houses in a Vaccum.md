## Kotlin Day `3` - Perfectly Spherical Houses in a Vacuum

![I Was Told There Would Be No Math](https://cdn-images-1.medium.com/max/1600/1*_OaALfmikmjFgJ9B6VzIHw.jpeg)

> From Advent of Code 2015, [*Day 3*](https://adventofcode.com/2015/day/3)



```fortran
v>v<vvv<<vv^v<v>vv>v<<<^^^^^<<^<vv>^>
v^>^>^>^>^><vvvv<^>^<<^><<<^vvvv>^>^>
<^v^><^<>^^>^vvv^<vv>>^>^^<>><>^>vvv>
>^vv>^<><>^<v^>^>^><vv^vv^>><<^><<v>>
<>^<^>>vvv>v>>>v<<^<><^<v<>v>^^v^^^<^
v^^>>><^>^>v<>^<>>^>^^v^><v<v>>><>v<v
```



---

### Model 

We model a position object as a simple `Int`.  

```kotlin
private val len = 10000

fun nextPos(acc: Int, c: Char) = when(c) {
  '^' -> acc + len
  'v' -> acc - len
  '>' -> acc + 1
  '<' -> acc - 1
  else -> acc
}
```

Given an instruction `char` and current position `acc`, we can figure out the next position based on the direction it takes.

We lower the dimension to use 1-D coordinates for 2-D layout, hoping it produces quicker coding and simpler understanding for the problem.


### Part 1

Given a list of direction instructions, find out total number of places visited.

```kotlin
fun part1(s: String) = s
  .scan(0, nextPos)
  .distinct()
  .count()
}
```

We `scan` all the instructions to get snapshots of future positions, among them we can find the `distinct` set and the `count`.

> If you wonder why we are making a function accepting additional `acc` here, please checkout [Day 1 - Part 2](https://medium.com/@windmaomao/kotlin-day-1-up-and-down-38885a5fc2b1) for gathering the intermediate result.


### Part 2

Given two persons taking turns processing same list of instructions, find out total number of places visited.

```kotlin
fun evenOddGroups(s: String) = s
  .withIndex()
  .groupBy { it.index % 2 }.values
  .map { it.map { v -> v.value }
```

We can split the list into two lists with evens in one and odds in another.

```kotlin
fun part2(s: String) = evenOddGroups(s)
  .flatMap { it.scan(0, nextPos) }
  .distinct()
  .count()
```

Each list goes through exactly same  process as in `part1`. In order to get the joint effort from two groups here, we resort to `flatMap` to put two streams back into one stream of data. 

![Flatmap in Real Time](https://miro.medium.com/max/2460/1*_Y63YvBMyq8gnTkO_g3etQ.png)

In the real time , `flatMap` is designed to join multiple streams into one stream according to  element's chronological order. This behavior interestingly mimics the human collaboration pattern very closely.

### Highlights

- How sometimes lower dimension is more cost-effective?
- How to distribute work and gather result from each unit?

---

*Now, ready for the next day?* [*Day 2 — I was Told There Would be No Math*](https://medium.com/@windmaomao/kotlin-day-2-i-was-told-there-would-be-no-math-ec0f9e1064cc)

*Or, revisit the previous day?* [*Day 4 — The Ideal Stocking Stuffer*](https://me181)

For Complete source code, please visit [*AoC 2015 Kotlin*](https://github.com/windmaomao/adventofcode/tree/master/2015/kt/src/test/kotlin/org/adventofcode).

