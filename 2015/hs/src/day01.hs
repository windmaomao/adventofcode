step :: Num t => Char -> t
step '(' = 1
step ')' = -1
step _ = 0

floor :: (Functor f, Num b) => f Char -> f b
floor s = step <$> s

part1 :: [Char] -> Int
part1 s = sum $ floor s

part2 :: [Char] -> Int
part2 s = length $ takeWhile (>=0) $ scanl (+) 0 $ floor s

-- part1 <$> getLine