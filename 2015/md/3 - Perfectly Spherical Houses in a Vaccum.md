## Kotlin Day 3 - Perfectly Spherical Houses in a Vaccum

> From Advent of Code 2015, [*Day 3*](https://adventofcode.com/2015/day/3)

```fortran
v>v<vvv<<vv^v<v>vv>v<<<^^^^^<<^<vv>^>
v^>^>^>^>^><vvvv<^>^<<^><<<^vvvv>^>^>
<^v^><^<>^^>^vvv^<vv>>^>^^<>><>^>vvv>
>^vv>^<><>^<v^>^>^><vv^vv^>><<^><<v>><>^<^>>vvv>v>>>v<<^<><^<v<>v>^^v^^^<^
v^^>>><^>^>v<>^<>>^>^^v^><v<v>>><>v<v
```

sequence of operations

---

### Model 

We model a position object as a simple `Int`, since we believe a one dimension position can simplify the job here.  

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

Given a instruction `char` and current position `acc`, we can figure out the next position based on one of the instruction up, down, left and right.

### Part 1

Given a list of direction instructions in two dimensions, find out total number of places visited.

#### 

```kotlin
fun part1(s: String) = s
  .scan(0, nextPos)
  .distinct()
  .count()
}
```

We `scan` all the instructions to get all snapshot of future positions, afterwards we find the `distinct` set among them before taking a `count`.

### Part 2

Given two persons taking turns processing same list of instructions, find out total number of places visited.

```kotlin
fun evenOddGroups(s: String) = s
  .withIndex()
  .groupBy { it.index % 2 }.values
  .map { it.map { v -> v.value }
```

We can chop the list into two lists with evens in one and odds in another.

```kotlin
fun part2(s: String) = evenOddGroups(s)
  .flatMap { it.scan(0, nextPos) }
  .distinct()
  .count()
```

Each list goes through exactly same `scan` we did in `Part 1`, before their joint efforts `flatMap` back into the same stream to finish the `distinct` `count`.

### Highlights

- How sometimes lower dimension is more cost-effective?
- How to distribute work while keeping the atomic unit?

---

*Now, ready for the next day?* [*Day 2 — I was Told There Would be No Math*](https://medium.com/@windmaomao/kotlin-day-2-i-was-told-there-would-be-no-math-ec0f9e1064cc)

*Or, revisit the previous day?* [*Day 4 — The Ideal Stocking Stuffer*](https://me181)

*For Complete source code, please visit [*AoC 2015 Kotlin*](https://github.com/windmaomao/adventofcode/tree/master/2015/kt/src/test/kotlin/org/adventofcode)*.