### Extra Credit - Generator to the rescue

#### Problem

Avoid using a `while` loop or any `if` statement early on. 

```kotlin
  while(v != pos) {
    v += charValue(s[i])
    i++
  }
  return i
```

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

The code should be as efficient as used to be, in theory, due to the laziness of the `sequence`, since it won't generate all of items before calling `indexOf`, instead the items are generated 

We could generate the `sequence` from scratch,  

```kotlin
  fun getSequence(s: String) : Sequence<Int> {
    return sequence {
      var v = 0
      s.forEach {
        v += charValue(it)
        yield(v)
      }
    }
  }

  fun part2y(s: String): Int {
    return getSequence(s).indexOf(-1)
  }
```

The nice thing about this separation is that yo	u can think of the problem as two parts from now on: A) generate the data as a continuous list; B) explore the new generated list later by applying other operations.



There's certain level of _unknown_ in this `sequence` , as you can see, you won't know the length of the sequence before it's generated via `toList` function, where we take the length as our answer. 

The length is only going to be determined when we ask to take the first few elements until a condition is met via `takeWhile` function. Of course nothing to stop you using any other operations as you normally do (ex. `map`, `forEach` etc.). 

The main take away here is that the original problem seems 50% easier if you want to focus your attention to only half of them. 

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