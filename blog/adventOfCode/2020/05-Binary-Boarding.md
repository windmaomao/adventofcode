# Haskell Day 5 - Binary Boarding
```haskell
binary :: Integral t => (t, t) -> Char -> (t, t)
binary (l, h) c
	| (c == 'F') || (c == 'L') = (l, mid)
	| c == 'B' || (c == 'R') = (mid + 1, h)
	where mid = (h + l) `div` 2

seat :: String -> Int
seat str = row * 8 + col
	where 
		row = fst $ find (0, 127) $ take 7 str
		col = fst $ find (0, 7) $ drop 7 str
		find r s = foldl binary r s
				
part1 :: [Int] -> Int
part1 = maximum

part2 :: [Int] -> Int
part2 seats = sum [l..h] - sum seats
	where
		l = minimum seats
		h = maximum seats

main :: IO ()
main = do
	fn <- lines <$> readFile "../res/05.input"
	let seats = seat <$> fn
	print $ (part1 seats, part2 seats)
```