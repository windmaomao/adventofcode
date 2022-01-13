mod day02;
use day02::{ part1, part2 };

fn main() { run() }

fn run() {
  let nums = include_str!("../../inputs/day2.data")
  .split(",")
  .map(|n| n.parse().unwrap())
  .collect::<Vec<usize>>();
  
  println!("part1: {}", part1(&nums));
  println!("part2: {:?}", part2(&nums));
}
