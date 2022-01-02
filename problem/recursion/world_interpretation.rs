use std::collections::HashMap;

#[derive(Debug,Hash,PartialEq,Eq,Copy,Clone)]
struct Pos(i8, i8);

struct Maze {
  mat: Vec<Vec<char>>
}

impl Maze {
  fn new(strs: &str) -> Maze {
    let mat = strs.lines()
      .map(String::from)
      .map(|l| l.chars().collect())
      .collect();
    
    Maze {
      mat
    }
  }
  
  fn char(&self, p: &Pos) -> char {
    self.mat[p.0 as usize][p.1 as usize]
  }
  
  fn search(
    &self, p: &Pos, keys: &Vec<char>
  ) -> Vec<char> {
    let dirs: [(i8,i8);4] = [(-1,0), (0,1), (1,0), (0,-1)];
    let mut marked: HashMap<Pos, bool> = 
      HashMap::new();
    let mut queue = vec![(p.clone(), 0)];
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
      println!("{:?}:{}, {}", p, c, key_taken);
      
      if c.is_lowercase() && !key_taken { 
        dest.push(c);
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
}

fn main() {
  let m = Maze::new("\
#########
#b.A.@.a#
#########");
    
  println!("{}, {:?}", 
    m.char(&Pos(0,1)), 
    m.search(&Pos(1,5), &vec![])
  )
}