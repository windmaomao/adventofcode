type Code = Vec<isize>;

fn intcode(a: &mut Code) -> Code {
  let mut res = Vec::new();
  let mut i = 0;
  
  let _v = |a: &Code, v, m| {
    if m == 1 { v } else { a[v as usize] }
  };
  
  while i < a.len() {
    let op = a[i] % 100;
    let m = (
      a[i] / 100 % 10,
      a[i] / 1000 % 10,
      a[i] / 10000 % 10
    );
    i += match op {
      1 => {
        let v = (a[i+1], a[i+2], a[i+3] as usize);
        a[v.2] = _v(a, v.0, m.0) + _v(a, v.1, m.1);
        4
      },
      2 => {
        let v = (a[i+1], a[i+2], a[i+3] as usize);
        a[v.2] = _v(a, v.0, m.0) * _v(a, v.1, m.1);
        4
      },
      3 => {
        let v = a[i+1] as usize;
        a[v] = 1;
        2
      },
      4 => {
        let v = a[i+1];
        res.push(_v(a, v, m.0));
        2
      },
      99 => break,
      _ => panic!("Unknown OP")
    }
  }
  res
}

fn test_intcode() {
  let output = intcode(&mut vec![3,0,4,0,99]);
  assert_eq!(output, vec![1]);
  let mut code: Code = vec![1002,4,3,4,33];
  intcode(&mut code);
  assert_eq!(code[4], 99);
}

fn part1(a: &Code) -> isize {
  let output = intcode(&mut a.clone());
  *output.last().unwrap()
}

pub fn run() {
  let nums = include_str!("../../../inputs/day5.data")
    .split(",")
    .map(|n| n.parse().unwrap())
    .collect::<Code>()
  ;
  
  test_intcode();
  println!("{}", part1(&nums));
}

fn main() { run() }
