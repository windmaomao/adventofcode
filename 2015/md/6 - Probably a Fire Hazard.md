## Kotlin Day 6 - Probaby a Fire Hazard

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
fun part1(list: List<Instruction>, n: Int): Int {
  val arr = Array<Boolean>(n * n){ false }
  list.forEach { ins -> 
	  val pos = ins.getPos()
    when(ins.action) {
      ACTION.Toggle -> pos.forEach { arr[it] = !arr[it] }
      ACTION.On -> pos.forEach { arr[it] = true }
      else -> pos.forEach { arr[it] = false }      
    }
  }
  return arr.count { it }
}
```

## Part 2

Given `0,0` to `999,999` of hourses and a list of different instruction text, find out total brightness of all lights.

```kotlin
val applyArr: FlipLights = { arr, ins ->
}

fun part2(
  list: List<Instruction>, 
  n: Int,
): Int {
  val arr = Array<Int>(n*n){ false }
  list.forEach {
  	val pos = ins.getPos()                        
  	when (action) {
    	ACTION.Toggle -> pos.forEach { arr[it] += 2 }
    	ACTION.On -> pos.forEach { arr[it] += 1 }
    	else -> pos.forEach {
      	if (arr[it] > 0) arr[it] -= 1
    	}
  	}
  }
  return arr.count { it }
}
```

