import Data.Array

toInt :: String -> Int
toInt s = read s :: Int

numbers :: String -> [Int]
numbers = (map toInt) . lines

part1 :: [Int] -> Int
part1 nums = head [a*b | a <- nums, b <- nums, a + b == 2020] 
	
part2 :: [Int] -> Int
part2 nums = head [a*b*c | a <- nums, b <- nums, c <-nums,  a + b + c == 2020] 

main = do
  fn <- numbers <$> readFile "../res/01.input"
  print (part1 fn , part2 fn)
	