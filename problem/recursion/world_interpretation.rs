use std::collections::HashMap;

#[derive(Debug,Hash,PartialEq,Eq,Copy,Clone)]
struct Pos(i8, i8);

struct Maze {
  mat: Vec<Vec<char>>,
  keys_len: usize
}

impl Maze {
  fn new(strs: &str) -> Maze {
    let mat = strs.lines()
      .map(String::from)
      .map(|l| l.chars().collect())
      .collect();
    
    Maze {
      mat,
      keys_len: 2
    }
  }
  
  fn char(&self, p: &Pos) -> char {
    self.mat[p.0 as usize][p.1 as usize]
  }
  
  fn locate_keys(
    &self, p: &Pos, keys: &Vec<char>
  ) -> Vec<(char, Pos, usize)> {
    let dirs: [(i8,i8);4] = 
      [(-1,0), (0,1), (1,0), (0,-1)];
    let mut marked: HashMap<Pos, bool> = 
      HashMap::new();
    let mut queue: Vec<(Pos, usize)> = 
      vec![(p.clone(), 0)];
    let mut dest = vec![];
    let mut i = 0;
    
    loop {
      if i == queue.len() { break; }
      let (p, dist) = queue[i];
      i = i + 1;
      marked.insert(p.clone(), true);
      
      let c = self.char(&p);
      let key_taken = keys.iter()
        .find(|&&k| k == c) != None;
//    println!("{:?}:{}, {}", p, c, key_taken);
      
      if c.is_lowercase() && !key_taken { 
        dest.push((c, p.clone(), dist));
      } else {
        for d in dirs.iter() {
          let q = Pos(d.0+p.0, d.1+p.1);
          if marked.get(&q) != None { continue }
          
          let qc = self.char(&q);
          if qc == '#' { continue }
          
          if qc.is_uppercase() {
            let door_key = qc.to_ascii_lowercase();
            let key_found = keys.iter()
              .find(|&&k| k == door_key) != None;
            if !key_found { continue }
          }
          queue.push((q, dist+1));
        }
      }
    }
    
    dest
  }
  
  fn min_steps(
    &self, p: &Pos, keys: &Vec<char>
  ) -> usize {
    let mut steps = 100000;
    if keys.len() == self.keys_len {
      steps = 0
    } else {
      let keys_found = self.locate_keys(p, keys);
      for (qc, q, qdist) in keys_found.iter() {
        let mut qkeys = keys.clone();
        qkeys.push(qc.clone());
        let qsteps = self.min_steps(&q, &qkeys)+qdist;
        println!("{} {:?} {}", qc, q, qdist);
        if qsteps < steps { steps = qsteps; }
      }
    }
    
    steps
  }
}

fn main() {
  let m = Maze::new("\
#########
#b.A.@.a#
#########");
    
  println!("{}, {:?}, {}", 
    m.char(&Pos(1,5)), 
    m.locate_keys(&Pos(1,5), &vec!['a']),
    m.min_steps(&Pos(1,5), &vec![])
  )
}