fn fuel(m: i32) -> i32 {
  m / 3 - 2
}

fn test_fuel() {
  assert_eq!(fuel(12), 2);
  assert_eq!(fuel(14), 2);
  assert_eq!(fuel(1969), 654);
  assert_eq!(fuel(100756), 33583);
}

pub fn part1(arr: &Vec<i32>) {
  let fuels: i32 = arr.iter()
    .map(|&v| fuel(v))
    .sum();

  println!("part1: {}", fuels);
}

fn fuel_r(m: i32) -> i32 {
  let v = fuel(m);
  if v <= 0 { 0 } else { v + fuel_r(v) }
}

fn test_fuel_r() {
  assert_eq!(fuel_r(14), 2);
  assert_eq!(fuel_r(1969), 966);
  assert_eq!(fuel_r(100756), 50346);
}

pub fn part2(arr: &Vec<i32>) {
  let fuels: i32 = arr.iter()
    .map(|&v| fuel_r(v))
    .sum();

  println!("part2: {}", fuels);
}

pub fn run() {
  let nums = include_str!("../../../inputs/day1.data")
    .lines()
    .map(|n| n.parse().unwrap())
    .collect::<Vec<i32>>();
  
  test_fuel();
  part1(&nums);
  test_fuel_r();
  part2(&nums);
}

fn main() { run() }
