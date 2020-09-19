### Kotlin Day 3

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
fun part2(s: String) = s
  .chunked(2)  // [0, 1], [1, 2], ...
  .scan(listOf(0,0)) { acc: List<Int>, c: String ->
    acc.mapIndexed { i, a -> nextPos(a, c[i]) }
  }
  .flatten()
  .distinct()
	.count()
}
```

After we split the instruction into `chunked`, the  `scan` is written for list of person each of whom goes to next position. After we get two list of position snapshots, we `flatten` them into one list.

This made me think if we are tolerable enough we could use `part1` result.

```kotlin
fun part2(s: String) = s
  .groupBy { i % 2 } // [0, 2, ...], [1, 3, ...]
  .toList()
  .flatMap { it.scan(0, nextPos) }
  .distinct()
	.count()
}
```

