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

Instead of having `while`, We want to seperate this `if` from the loop, as demostrated below using a `sequence` and later `takeWhile`.  

```kotlin
  fun part2y(s: String): Int {
    val list = sequence {
      var v = 0
      s.forEach {
        v += charValue(it)
        yield(v)
      }
    }
    return list.takeWhile{ it == -1 }.toList().size
  }
```

The nice thing about this seperation is that you can think of the problem as two parts from now one, A) generate the data as a continious list; B) explore the new generated list later by applying other operations

> Sequence (or generator) is one of the modern feature to us, it's lazy by nature, and it could have unlimited number and allows you focus on the generation of the data. 

There's certain level of _unknown_ in this `sequence` , as you can see, you won't know the length of the sequence before it's generated via `toList` function, where we take the length as our answer. 

The change of length is due to that we ask to take the first few elements until a condition is met through `takeWhile` function. Of course nothing to stop you using any other operations as you normally do (ex. `map`, `forEach` etc.). The main take away here is that the problem seems relatively easier. 

#### Test

```kotlin
  @Test fun day02Part2yExample() {
    assertEquals(1, d.part2y(")"))
    assertEquals(5, d.part2y("()())"))
  }

  @Test fun day01Part2y() {
    assertEquals(1797, d.part2y(d.getLine()))
  }
```