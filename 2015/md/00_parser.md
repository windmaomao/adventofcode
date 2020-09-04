### Ready, Go - Parse a file

#### Problem

Given a file name, load it into multiple lines of string.

#### Solution

```kotlin
import java.io.File

fun parseFile(name: String): List<String> {
  return File("../res/$name.input").readLines()
}
```

> The language you choose will provide you with a `File` object.

#### Test

In order to make sure it's robust, we write

```kotlin
  @Test fun day00ParseFile() {
    assertEquals(
      listOf("line1", "line2", "line3")
      parseFile("01")
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
  fun extractNumbers(s: String): List<Int> {
    val pattern = """\d+""".toRegex()
    return pattern
    	.findAll(s)
    	.map { it.value.toInt() }
    	.toList()
  }
```

We create a pure function to accept a string, use a regular expression to define the number `\d+` and then match and convert for each number. 

> A pure function accepts an input and generates an output without changing any external states. This is the general usage of functional programming (FP).

#### Test

In order to make sure it's robust, we write

```kotlin
  @Test fun day00ExtractNumbers() {
    assertEquals(
      listOf(32,45,89), 
      extractNumbers("32x45x89")
    )
    assertEquals(
      listOf(857,493), 
      extractNumbers("toggle 857,493")
    )
  }
```

