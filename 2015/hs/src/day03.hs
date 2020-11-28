import Data.List (nub)

type Pos = (a, a)

next :: (Num a) => Pos -> Char -> Pos
next (x,y) '^' = (x, y+1)
next (x,y) 'v' = (x, y-1)
next (x,y) '<' = (x-1, y)
next (x,y) '>' = (x+1, y)
next (x,y) _ = (x,y)

visited :: Num a => [Char] -> [Pos]
visited = scanl next (0,0)

uniqueVisits :: Eq a => [a] -> Int
uniqueVisits = length . nub

-- Nefrubyr's every from StacksOverflow
every :: Int -> [a] -> [a]
every n xs = case drop (n-1) xs of
              (y:ys) -> y : every n ys
              [] -> []

part1 :: [Char] -> Int
part1 = uniqueVisits . visitedpart2 :: [Char] -> Int
part2 = uniqueVisits . visitedP
  where visitedP ls = visited e ++ visited o
          where e = every 2 ls
                o = every 2 (' ':ls)

-- part1 <$> readFile "03.input"
-- part2 <$> readFile "03.input"