use std::ops::Add;

#[derive(Debug, PartialEq, Eq, Hash, Clone, Copy)]
pub struct Point<T>(pub T, pub T);

impl<T: Add<Output = T>> Add for Point<T> {
  type Output = Self;
  
  fn add(self, other: Self) -> Self::Output {
    Self(self.0 + other.0, self.1 + other.1)
  }
}
