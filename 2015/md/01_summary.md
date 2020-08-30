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

Instead of having `while`, We want to separate this `if` from the loop, as demonstrated below using a `sequence`.  

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

The nice thing about this separation is that you can think of the problem as two parts from now on: A) generate the data as a continuous list; B) explore the new generated list later by applying other operations

> Sequence (or generator) is one of the modern feature to us, it's lazy by nature, and it could have unlimited number and allows you focus on the generation of the data. 

There's certain level of _unknown_ in this `sequence` , as you can see, you won't know the length of the sequence before it's generated via `toList` function, where we take the length as our answer. 

The length is only going to be determined when we ask to take the first few elements until a condition is met via `takeWhile` function. Of course nothing to stop you using any other operations as you normally do (ex. `map`, `forEach` etc.). 

The main take away here is that the original problem seems 50% easier if you want to focus your attention to only half of them. 

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