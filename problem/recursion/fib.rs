fn main() {
  println!("{}", fib(44))
}

fn fib(n: u8) -> u32 {
  match n {
    0 => 1,
    1 => 1,
    _ => fib(n-1) + fib(n-2),
  }
}