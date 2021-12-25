pub fn run() {
  let mut nums = include_str!("../../inputs/day2.data")
  .split(",")
  .map(|n| n.parse().unwrap())
  .collect::<Vec<usize>>();

  nums[1] = 12;
  nums[2] = 2;
  intcode(&mut nums);
  println!("part1: {}", nums[0]);
}

fn intcode(a: &mut Vec<usize>) {
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
      99 | _ => {
        break;
      },
    }
  }
}

#[test]
fn test_intcode() {
  let mut nums: Vec<usize> = [
    1,9,10,3,
    2,3,11,0,
    99,
    30,40,50
  ].to_vec();

  intcode(&mut nums);
  assert_eq!(nums[0], 3500);
}