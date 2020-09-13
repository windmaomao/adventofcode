package org.adventofcode

fun <T> List<T>.permutations(): List<List<T>> {
  if (this.isEmpty()) return emptyList()
  if (this.size == 1) return listOf(this)
  if (this.size == 2) return listOf(listOf(this.first(), this.last()), listOf(this.last(), this.first()))
  return this.flatMap { lastItem ->
    this.minus(lastItem).permutations().map { it.plus(lastItem) }
  }
}