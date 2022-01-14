type Password = [usize; 6];

fn valid(a: &Password) -> bool {
  (0..5).all(|i| a[i] <= a[i+1]) &&
  (0..5).any(|i| a[i] == a[i+1])
}

fn password(v: usize) -> Password {
  [
    v / 100000 % 10,
    v / 10000 % 10,
    v / 1000 % 10,
    v / 100 % 10,
    v / 10 % 10,
    v / 1 % 10,
  ]
}

fn valid_password(v: usize) -> bool {
  valid(&password(v))
}

fn test_valid_password() {
  assert_eq!(valid_password(111111), true);
  assert_eq!(valid_password(223450), false);
  assert_eq!(valid_password(123789), false);
}

fn part1(vs: &Vec<usize>) -> usize {
  vs.iter().filter(|&&v| valid_password(v)).count()
}

fn valid2(a: &Password) -> bool {
  let mut cs = [0; 10];
  (0..6).for_each(|i| cs[a[i]] += 1);
  (0..9).any(|i| cs[i] == 2)
}

fn valid_password2(v: usize) -> bool {
  let p = password(v);
  valid(&p) && valid2(&p)
}

fn test_valid_password2() {
  assert_eq!(valid_password2(112233), true);
  assert_eq!(valid_password2(123444), false);
  assert_eq!(valid_password2(111122), true);
}

fn part2(vs: &Vec<usize>) -> usize {
  vs.iter().filter(|&&v| valid_password2(v)).count()
}

fn run() {
  let nums: Vec<usize> = (367479..893698+1).collect();
  
  test_valid_password();
  println!("part1: {}", part1(&nums));
  test_valid_password2();
  println!("part2: {}", part2(&nums));
}

fn main() { run() }