package org.adventofcode

data class Box1(val l: Int, val w: Int, val h: Int) {
  private val m = maxOf(l, w, h)
  fun paper(): Int {
    return (l * w + w * h + h * l) * 2 + l * w * h / m
  }
  fun reserved(): Int {
    return (l + w + h - m) * 2 + l * w * h
  }
}

class Day02(name: String): Day(name) {
  fun getBox(s: String): Box1 {
    val v = s.split('x').map{ it.toInt() }
    return Box1(v[0], v[1], v[2])
  }

  data class Box(val props: List<Int>) {
    fun paper(): Int {
      val l = props[0]
      val w = props[1]
      val h = props[2]

      val m: Int = props.max()!!
      return (l*w + w*h + h*l)*2 + l*w*h/m
    }
    fun reserved(): Int {
      val l = props[0]
      val w = props[1]
      val h = props[2]

      val m: Int = props.max()!!
      return (l+w+h-m)*2 + l*w*h
    }
  }

  fun getProps(): List<List<Int>> {
    return lines.map{ line ->
      line.split('x').map{ it.toInt() }
    }
  }

  fun part1(list: List<String>): Int {
    return list.map { getBox(it).paper() }.sum()
  }

  fun part2(boxes: List<List<Int>>): Int {
    return boxes.map { box -> Box(box).reserved() }.sum()
  }
}