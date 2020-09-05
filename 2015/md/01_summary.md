### Extra Credit - Generator to the rescue

#### Problem

Avoid using a `while` loop or any `if` statement early on. 

#### Solution

```kotlin
  fun part2s(s: String): Int {
    val all = s.asSequence()
      scan(0) { acc, c -> acc + charValue(c) }
    return all.indexOf(-1)
  }
```

We convert the string into a `sequence` and then use `scan` to get snapshot of all positions, thus find the index of `-1` in the end.

> Sequence (or generator) is one of the modern feature to us, it's lazy by nature, and it could have unlimited number and allows you focus on the generation of the data. 

The code should be as efficient as used to be, due to the laziness of the `sequence`, since it won't generate all of items before calling `indexOf`, instead the items are generated 

The nice thing about this approach is that you can think of the problem as two parts from now on: A) generate the data as a continuous list; B) explore the new generated list later by applying other operations.

There's certain level of _unknown_ in this `sequence` , as you can see, you won't know the length of the sequence before it's generated. It is only going to be determined when we ask to seach one element via `indexOf` function.

#### Test

```kotlin
  @Test fun day01Generator() {
    val s: Sequence<Int> = d.getSequence(d.getLine())
    assertEquals(
      listOf(1, 0, 1, 0, 1), 
      s.take(5).toList()
    )
  }

  @Test fun day01Part2y() {
    assertEquals(1797, d.part2y(d.getLine()))
  }
```