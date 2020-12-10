### GCD - Greatest common divisor

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