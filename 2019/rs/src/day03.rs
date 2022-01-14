mod point;
use point::Point;
use std::collections::HashMap;

pub fn intersect_wires(
  w1: &str, w2: &str, dist_or_steps: bool
) -> usize {
  calc_intersect_dist(
    build_wiremap(w1),
    build_wiremap(w2), 
    dist_or_steps
  )
}

fn test_intersect_wires() {
  assert_eq!(intersect_wires(
    "R8,U5,L5,D3", "U7,R6,D4,L4", false
  ), 6);
  assert_eq!(intersect_wires(
    "R75,D30,R83,U83,L12,D49,R71,U7,L72",
    "U62,R66,U55,R34,D71,R55,D58,R83", false
  ), 159);
  assert_eq!(intersect_wires(
    "R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51",
    "U98,R91,D20,R16,D67,R40,U7,R15,U6,R7", false
  ), 135);
  assert_eq!(intersect_wires(
    "R75,D30,R83,U83,L12,D49,R71,U7,L72",
    "U62,R66,U55,R34,D71,R55,D58,R83", true
  ), 610);  
  assert_eq!(intersect_wires(
    "R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51",
    "U98,R91,D20,R16,D67,R40,U7,R15,U6,R7", true
  ), 410);
}


struct Distance {
  manhattan: usize,
  steps: usize,
}

type HashPointDist = HashMap<Point<i32>, Distance>;

fn calc_intersect_dist(
  m1: HashPointDist,
  m2: HashPointDist,
  dist_or_steps: bool
) -> usize {
  let mut min = 100000; 
  for (key, value) in m1.into_iter() {
    match m2.get(&key) {
      Some(x) => {
        let s = if dist_or_steps {
          value.steps + x.steps
        } else {
          value.manhattan
        };
        if s < min { min = s };
      },
      None => {}
    }
  };
  min
}

fn build_wiremap(w: &str) -> HashPointDist {
  let mut hmap = HashMap::new();
  let mut pos = Point(0_i32, 0_i32);
  let mut k: usize = 0;
  let parts = w.split(',');
  for p in parts {
    let op  = p.to_string();
    let c = &op[..1];
    let n: usize = op[1..].parse().unwrap();
    let dir: Point::<i32> = match c {
      "R" => Point(1, 0), "L" => Point(-1, 0),
      "U" => Point(0, 1), "D" => Point(0, -1),
      _ => Point(0, 0)
    };
    for _i in 0..n {
      pos = pos + dir;
      k += 1;
      hmap.insert(pos, Distance {
        manhattan: (pos.0.abs() + pos.1.abs()) as usize,
        steps: k
      });
    }
  }
  hmap
}

fn run() {
  let s: Vec<&str> = 
    include_str!("../../inputs/day3.data")
    .lines().collect();
  let dist1 = intersect_wires(s[0], s[1], false);
  let dist2 = intersect_wires(s[0], s[1], true);
  
  test_intersect_wires();
  println!("part1: {}", dist1);
  println!("part2: {}", dist2);
}

fn main() { run() }

