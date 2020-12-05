module Main where

part dx dy mat = length [s | s <- visits, s == '#']
  where n = length mat
        m = length $ head mat
        pos = [(i, (i*dx `div` dy) `mod` m) | i <- [0,dy..(n-1)]]
        visits = [mat !! (fst p) !! (snd p) | p <- pos]

part1 = part 3 1
part2 mat = n1*n3*n5*n7*n2
  where n1 = part 1 1 mat
        n3 = part 3 1 mat
        n5 = part 5 1 mat
        n7 = part 7 1 mat
        n2 = part 1 2 mat

main :: IO ()
main = do
  fn <- lines <$> readFile "../res/03.input"
  print $ (part1 fn, part2 fn)
	
--104*230*83*98*49