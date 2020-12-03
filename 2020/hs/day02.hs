module Main where

type Task = (Int, Int, Char, String)

toTask :: String -> Task
toTask s = (l, h, c, pwd)
  where parts = words s
        (l', h') = break (=='-') (parts !! 0)
        l = read l'
        h = read $ tail h'
        pwd = parts !! 2
        c = head $ parts !! 1

match1 :: Task -> Bool
match1 (l, h, c, pwd) = n >= l && n <= h
  where n = length [x | x <- pwd, x == c]

match2 :: Task -> Bool
match2 (l, h, c, pwd) = (m1 && not m2) || (m2 && not m1)
  where m1 = (pwd !! (l - 1)) == c
        m2 = (pwd !! (h - 1)) == c
	
part :: (Task -> Bool) -> [Task] -> Int
part m tasks = length [t | t <- tasks, (m t)]

main :: IO ()
main = do
  fn <- readFile "../res/02.input"
  let tasks = (map toTask) $ lines fn
  print $ (part match1 tasks, part match2 tasks)