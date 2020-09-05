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

We create a function inside scope `org.adeventofcode`, therefore expecting to reuse this function. Function, simple as this, are highly testable and reusable. 

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

We create an extension function for a string, which looks for  number `\d+` via regular expression and output them as an integer list.

> Extension applied to a type provides different way of calling a function, which can get very useful when chaining functions together. 


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

