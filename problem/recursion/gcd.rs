fn main() {
  let n: u64 = 100000;
  let mut a = 0;
  for _i in 0..n {
    a = gcd(461952, 116298);
  }
  println!("{}", a)
}

//fn gcd(mut a: u32, mut b: u32) -> u32 {
//let mut t: u32;
//while b != 0 {
//  t = b;
//  b = a % b;
//  a = t;
//}
//a
//}

//fn gcd(a: u32, b: u32) -> u32 {
//match b {
//  0 => a,
//  _ => gcd(b, a % b)
//}
//}

fn gcd(a: u32, b: u32) -> u32 {
  if b == 0 { a } else { gcd(b, a % b) }
}
