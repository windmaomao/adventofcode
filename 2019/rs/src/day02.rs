type Code = Vec<usize>;

pub fn intcode(a: &mut Code) {
  let mut i = 0;
  loop {
    let op = a[i];
    match op {
      1 => {
        let v = (a[i+1], a[i+2], a[i+3]);
        a[v.2] = a[v.0] + a[v.1];
        i = i + 4;
      },
      2 => {
        let v = (a[i+1], a[i+2], a[i+3]);
        a[v.2] = a[v.0] * a[v.1];
        i = i + 4;
      },
      99 => break,
      _ => panic!("Unknown OP")
    }
  }
}

fn test_intcode() {
  let mut nums: Code = [
    1,9,10,3,
    2,3,11,0,
    99,
    30,40,50
  ].to_vec();

  intcode(&mut nums);
  assert_eq!(nums[0], 3500);
}

fn run_code(
  codes: &Code, noun: usize, verb: usize
) -> usize {
  let mut vs = codes.clone();
  vs[1] = noun;
  vs[2] = verb;
  intcode(&mut vs);
  vs[0]
}

pub fn part1(code: &Code) -> usize {
  run_code(code, 12, 2)
}

pub fn part2(code: &Code) -> usize {
  for n in 0..100 {
    for v in 0..100 {
      if run_code(code, n, v) == 19690720 {
        return n * 100 + v;
      }
    }
  }
  0
}

fn run() {
  let nums = include_str!("../../inputs/day2.data")
    .split(",")
    .map(|n| n.parse().unwrap())
    .collect::<Vec<usize>>()
  ;
  
  test_intcode();
  println!("part1: {}", part1(&nums));
  println!("part2: {}", part2(&nums));
}

fn main() { run() }