## Kotlin Day `0` - From Dusk to Dawn

![](https://miro.medium.com/max/1400/1*Aa1rE57N8hbNHMnfOVQyCQ.jpeg)

> From Advent of Code [*2015*](https://adventofcode.com/2015). 



```fortran
((((()))))))))))
15x24x8
v>v<vvv<<vv^v<v>vv>v<<<^^^
vfarmltinsriqxpu
toggle 857,493 through 989,970
dd RSHIFT 3 -> df
"kbngyfvvsdismznhar\\p\"\"gpryt\"jaeh"
```



Each day we start with a file, 

Each line corresponds to an item, 

Let it be a box, a secret, or a map ...

---

### Model

Given a string, build a model to facilitate the work.

```kotlin
fun extractModal(str: String): Model {}
```

Most of the work requires to build list of models from multiple lines.

```kotlin
fun extractModals(strs: List<String>) = strs
  .map { Model(it) }
  .toList()
```

If lines are stored in a file, we can load them.

```kotlin
import java.io.File

fun parseFile(name: String): List<String> =
  File("../res/$name.input").readLines()

```

### Part 1

What's your general practice looking for an answer? 

```kotlin
fun part1(list: List<Model>) = list.
  ...           
  .map {}
  .sum()                     
}
```

Normally it takes a few steps.

- If data isn't ready, preparation work is required to get the data and put into the right model.

- Models then pass through each step of the problem, and results in the intermediate data as the input for the next step. 

- Once the problem is solved, it reaches the aggregation where we output in the right format. 

Each of the above could have its own complexity,  which might splits into more steps. 


### Part 2

What's your better chance of finding the right answer in a consistent manner?

```kotlin
@Test fun day01Part1Example() {
  val part1 = { s: String -> 
    d.part1(d.extractOps(s)) 
  }
  assertEquals(0, part1("(())"))
  assertEquals(0, part1("()()"))
```

Of course, you can test the final answer as well,

```kotlin
@Test fun day01Part1() {
  assertEquals(280, d.part1(ops))
}
```

Test is an early plan of how you measure the success of the solution, and if better crafted, should reveal how you decouple and assemble all units back to solve the puzzle.

Your driver of writing test early on is mostly driven by your eagerness of having a solid solution in the end. Your reputation is on the line, your money is in the pot, but how can you increase the chance of the success before working towards it? 

### Highlights

- How to approach a problem?
- How to increase chance of solving it?

---

*Now, ready for the next day?* [*Day 1 — Not Quite Lisp*](https://medium.com/@windmaomao/kotlin-day-1-up-and-down-38885a5fc2b1)

*For Complete source code, please visit* [*AoC 2015 Kotlin*](https://github.com/windmaomao/adventofcode/tree/master/2015/kt/src/test/kotlin/org/adventofcode)*.*