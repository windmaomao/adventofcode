### Ready, Go - Parse a file

#### Problem

Given a file name, load it into multiple lines of string.

#### Solution

```kotlin
package org.adventofcode

import java.io.File

fun parseFile(name: String): List<String> =
  File("../res/$name.input").readLines()

```

We create a function inside scope `org.adeventofcode`, therefore expecting to reuse this function for the rest of the days. 

> Function, simple as this, are highly testable and reusable. And it's not neccesarily 

#### Test

In order to make sure it's robust, we write

```kotlin
  @Test fun day00ParseFile() {
    assertEquals(
      listOf("line1", "line2", "line3"),
      parseFile("00")
    )
  }
```

#### Problem

Now given a line of a string, extract all integers inside.

Ex. 

- 15x24x8
- toggle 857,493 through 989,970

#### Solution

```kotlin
fun String.extractNumbers(): List<Int> =
  """\d+""".toRegex()
    .findAll(this)
    .map { it.value.toInt() }
    .toList()
```

We create a pure extension function for a string, use a regular expression to define the number `\d+` and then match and convert for each number. 

> A pure function accepts an input and generates an output without changing any external states. This is the general usage of functional programming (FP).

> Extension applied to a type, ex. `String` will gives us nice syntax of `"abc".extractNumbers()`, espcially useful writing multiple functions in a chain. 


#### Test

In order to make sure it's robust, we write

```kotlin
  @Test fun day00ExtractNumbers() {
    assertEquals(
      emptyList<Int>(),
      "xbd".extractNumbers()
    )
    assertEquals(
      listOf(32,45,89),
      "32x45x89".extractNumbers()
    )
    assertEquals(
      listOf(857,493),
      "toggle 857,493".extractNumbers()
    )
  }
```

