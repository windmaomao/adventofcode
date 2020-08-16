package org.adventofcode

class Day02(name: String): Day(name) {
  data class Box(val props: List<Int>) {
    fun paper(): Int {
      val l = props[0]
      val w = props[1]
      val h = props[2]

      val m: Int = props.max()!!
      return 2*l*w + 2*w*h + 2*h*l + l*w*h/m
    }
  }

//  fun getBoxes(): List<List<Int>> {
//    return lines.map{ line ->
//      listOf(1, 2, 3)
//    }
//  }

  fun part1(boxes: List<List<Int>>): Int {
    return boxes.map { box -> Box(box).paper() }.sum()
  }
}