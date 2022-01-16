type Code = Vec<isize>;

fn intcode(a: &mut Code, ins: isize) -> Code {
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
    i = match op {
      1 => {
        let v = (a[i+1], a[i+2], a[i+3] as usize);
        a[v.2] = _v(a, v.0, m.0) + _v(a, v.1, m.1);
        i+4
      },
      2 => {
        let v = (a[i+1], a[i+2], a[i+3] as usize);
        a[v.2] = _v(a, v.0, m.0) * _v(a, v.1, m.1);
        i+4
      },
      3 => {
        let v = a[i+1] as usize;
        a[v] = ins;
        i+2
      },
      4 => {
        let v = a[i+1];
        res.push(_v(a, v, m.0));
        i+2
      },
      5 => {
        let v = (a[i+1], a[i+2]);
        if _v(a, v.0, m.0) != 0 {
          _v(a, v.1, m.1) as usize
        } else {
          i+3
        }
      },
      6 => {
        let v = (a[i+1], a[i+2]);
        if _v(a, v.0, m.0) == 0 {
          _v(a, v.1, m.1) as usize
        } else {
          i+3
        }
      },
      7 => {
        let v = (a[i+1], a[i+2], a[i+3] as usize);
        a[v.2] = if _v(a, v.0, m.0) < _v(a, v.1, m.1) 
          {1} else {0};
        i+4
      },
      8 => {
        let v = (a[i+1], a[i+2], a[i+3] as usize);
        a[v.2] = if _v(a, v.0, m.0) == _v(a, v.1, m.1) 
          {1} else {0};
        i+4
      },
      99 => break,
      _ => { println!("{}", op); panic!("Unknown OP") }
    }
  }
  res
}

fn test_intcode() {
  assert_eq!(
    intcode(&mut vec![3,0,4,0,99], 1), 
    vec![1]
  );
  let mut code: Code = vec![1002,4,3,4,33];
  intcode(&mut code, 1);
  assert_eq!(code[4], 99);
}

fn part1(a: &Code) -> isize {
  let output = intcode(&mut a.clone(), 1);
  *output.last().unwrap()
}

fn test_intcode2() {
  assert_eq!(
    intcode(&mut vec![3,9,8,9,10,9,4,9,99,-1,8], 8), 
    vec![1]
  );
  assert_eq!(
    intcode(&mut vec![3,9,7,9,10,9,4,9,99,-1,8], 7), 
    vec![1]
  );
  assert_eq!(
    intcode(&mut vec![3,3,1108,-1,8,3,4,3,99], 8), 
    vec![1]
  );
  assert_eq!(
    intcode(&mut vec![3,3,1107,-1,8,3,4,3,99], 7), 
    vec![1]
  );
  assert_eq!(
    intcode(&mut vec![3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9], 7), 
    vec![1]
  );
  assert_eq!(
    intcode(&mut vec![3,3,1105,-1,9,1101,0,0,12,4,12,99,1], 7), 
    vec![1]
  );
  assert_eq!(
    intcode(&mut vec![3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,
      1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,
      999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99], 8), 
    vec![1000]
  )
}

fn part2(a: &Code) -> isize {
  let output = intcode(&mut a.clone(), 5);
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
  test_intcode2();
  println!("{}", part2(&nums));
}

fn main() { run() }
