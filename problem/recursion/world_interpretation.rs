use std::collections::HashMap;

#[derive(Debug,Hash,PartialEq,Eq,Copy,Clone)]
struct Pos(i8, i8);

type CharMat = Vec<Vec<char>>;
type MemoHash = HashMap<String, usize>;

struct Maze {
  mat: CharMat,
  origin: Pos,
  keys_len: usize,
  memo: MemoHash
}

impl Maze {
  fn new(strs: &str) -> Maze {
    let mat = strs.lines()
      .map(String::from)
      .map(|l| l.chars().collect())
      .collect::<CharMat>();
      
    let mut origin = Pos(0,0);
    let mut keys_len = 0;
      
    for (i, line) in mat.iter().enumerate() {
      if let Some(j) = line.iter()
        .position(|&c| c == '@')
      {
        origin = Pos(i as i8, j as i8)
      }
      keys_len = keys_len + line.iter()
        .filter(|&c| c.is_lowercase()).count();
    }
      
    Maze {
      mat,
      origin,
      keys_len,
      memo: HashMap::new()
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
  
  fn memo_key<'a>(
    p: &'a Pos, keys: &'a Vec<char>
  ) -> String {
    let mut ordered = keys.clone();
    ordered.sort();
    let s: String = ordered.into_iter().collect();
    format!("{}:({},{})", s, p.0, p.1)
  }
  
  fn min_steps(&self, p: &Pos, keys: &Vec<char>) -> usize {
    let mut steps = 100000;
    let mkey = Maze::memo_key(&p, &keys);
    
    if keys.len() == self.keys_len {
      steps = 0
    } else {
      let keys_found = self.locate_keys(p, keys);
      for (qc, q, qdist) in keys_found.iter() {
        let mut qkeys = keys.clone();
        qkeys.push(qc.clone());
        let qsteps = self.min_steps(&q, &qkeys)+qdist;
//      println!("{} {:?} {}", qc, q, qdist);
        if qsteps < steps { steps = qsteps; }
      }
    }
//  self.memo.insert(mkey, steps);
    
    steps
  }
  
  fn solve(&self) -> usize {
    self.min_steps(&self.origin, &vec![])
  }
}

fn main() {
  let w1 = Maze::new("\
#########
#b.A.@.a#
#########"
  );
  println!("{}", w1.solve());
  
  let w2 = Maze::new("\
########################
#f.D.E.e.C.b.A.@.a.B.c.#
######################.#
#d.....................#
########################"
  );
  println!("{}", w2.solve());
  
  println!("{}", Maze::memo_key(&Pos(1,1), &vec!['b', 'a']))
  
  

//let w3 = Maze::new("\
//#################
//#i.G..c...e..H.p#
//########.########
//#j.A..b...f..D.o#
//########@########
//#k.E..a...g..B.n#
//########.########
//#l.F..d...h..C.m#
//#################"
//);
//println!("{}", w3.solve());
  
}