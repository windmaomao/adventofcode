mod day01;
use day01::{ part1, part2 };

fn main() { run() }

pub fn run() {
  let nums = include_str!("../../inputs/day1.data")
    .lines()
    .map(|n| n.parse().unwrap())
    .collect::<Vec<i32>>();

  part1(&nums);
  part2(&nums);
}