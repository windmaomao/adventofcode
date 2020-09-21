## Kotlin Day `6` - Probaby a Fire Hazard

> From Advent of Code 2015, [*Day 6*](https://adventofcode.com/2015/day/6)


```fortran
toggle 461,550 through 564,900
turn off 370,39 through 425,839
turn off 464,858 through 833,915
turn off 812,389 through 865,874
turn on 599,989 through 806,993
```



---

## Model

```kotlin
enum class ACTION { Toggle, On, Off }

data class Instruction(
  val y1: Int, val x1: Int,
  val y2: Int, val x2: Int,
  val n: Int = 10,
  val action: ACTION = ACTION.Off
) {
  fun getPos(): List<Int> {
    return (y1..y2).flatMap{ y ->
      (x1..x2).map { x -> y * n + x }
    }
  }
}
```

Given all houses in an array, we'd like to perform `FlipLights` based on a `Instruction` defined by the positions `x1, y1, x2, y2`  and an action enumerated from  `Toggle`, `On` or `Off`.

In calculating the range of positions for each `Instruction`, again we used one dimension position given the domain size `n`.

> If you wonder why we choose one dimensional array instead of two dimension, please checkout [Day 3 Part 1]().

You can extract `Instruction` from a string,

```kotlin
  fun getInstruction(s: String): Instruction {
    val (y0, x0, y1, x1) = extractNumbers(s)
    val action = when (s[6]) {
      ' ' -> ACTION.Toggle
      'n' -> ACTION.On
      else -> ACTION.Off
    }
    return Instruction(y0, x0, y1, x1, n, action)
  }
```



## Part 1

Given `0,0` to `999,999` of hourses and a list of instruction text, find out how many lights are lit afterwards?

```kotlin
fun <T> applyOps(
  arr: Array<T>,
  list: List<Instruction>,
  ops: HashMap<ACTION, ArrAction<T>>
) {
  list.forEach { ins ->
    ins.getPos().forEach {
      ops[ins.action]?.invoke(arr, it)
    }
  }
}

val statusOps = (
  Action.Toggle to { arr, i -> arr[i] = !arr[i] },
  Action.On to { arr, i -> arr[i] = true },
  Action.Off to { arr, i -> arr[i] = false }
)

fun part1(ins: List<Instruction>, n: Int): Int {
  val lights = Array<Boolean>(n * n){ false }
  applyOps(lights, ins, statusOps)
  return lights.count { it }
}
```

Given a list of `Instruction` and the domain size `n`, we can construct the  lights array and then  `applyOps` based on the defination of `ops`. 

## Part 2

Given `0,0` to `999,999` of hourses and a list of different instruction text, find out total brightness of all lights.

```kotlin
val brightOps: HashMap<ACTION, ArrAction<Int>> = hashMapOf(
  ACTION.Toggle to { a, i -> a[i] += 2 },
  ACTION.On to { a, i -> a[i] += 1 },
  ACTION.Off to { a, i -> if (a[i] > 0) a[i] -= 1 }
)

fun part2(ins: List<Instruction>, n: Int): Int {
  val lights = Array<Int>(n*n){ 0 }  
  applyOps(lights, ins, brightOps)
  return lights.sum()
}
```

The challenge here is that we can't use `Boolean` since brightness can be only modelled as an integer. In order to keep the code generic,  we subclass the type as generic `T`.

Since the type `T` is changed, the initial value of the lights, as well as the operations `brightOps` needs to be adjusted accordingly.

> For the performance reason, `applyOps` is designed as  a non-pure function that modifies the `lights`. However we take `lights` as a local variable of `part1` and `part2` which can be still pure functions.

### Highlights

- How to model complex object with `Class`?
- How to keep code generic for different data type `T`?

---

*Now, ready for the next day?* [*Day 7*](https://medium.com/@windmaomao/kotlin-day-2-i-was-told-there-would-be-no-math-ec0f9e1064cc)

*Or, revisit the previous day?* [*Day 5 — Doesn't He Have Intern-Elves For This*](https://medium.com/@windmaomao/kotlin-day-2-i-was-told-there-would-be-no-math-ec0f9e1064cc)

*For Complete source code, please visit [*AoC 2015 Kotlin*](https://github.com/windmaomao/adventofcode/tree/master/2015/kt/src/test/kotlin/org/adventofcode)*.