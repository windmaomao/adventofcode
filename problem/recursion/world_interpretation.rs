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
  
  fn search(&self, p: Pos) -> Vec<char> {
    let dirs: [(i8,i8);4] = [(-1,0), (0,1), (1,0), (0,-1)];
    let mut marked: HashMap<Pos, bool> = 
      HashMap::new();
    let mut queue = vec![(p, 0)];
    let mut dest = vec![];
    let mut i = 0;
    
    loop {
      if i == queue.len() { break; }
      let (p, dist) = queue[i];
      i = i + 1;
      marked.insert(p, true);
      
      let c = self.char(&p);
      println!("{:?}:{}", p, c);
      
      if c.is_lowercase() { 
        dest.push(c);
      } else {
        for d in dirs.iter() {
          let q = Pos(d.0+p.0, d.1+p.1);
          if marked.get(&q) != None { continue }
          if self.char(&q) == '#' { continue }
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
    m.search(Pos(1,5))
  )
}