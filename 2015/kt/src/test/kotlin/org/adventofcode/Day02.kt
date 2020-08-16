package org.adventofcode

class Day02(name: String): Day(name) {
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
    loadRes()
    return lines.map{ line ->
      line.split('x').map{ it.toInt() }
    }
  }

  fun part1(boxes: List<List<Int>>): Int {
    return boxes.map { box -> Box(box).paper() }.sum()
  }

  fun part2(boxes: List<List<Int>>): Int {
    return boxes.map { box -> Box(box).reserved() }.sum()
  }
}