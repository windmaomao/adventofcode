module Main where
import Data.Ix

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
match1 (l, h, c, pwd) = inRange (l, h) n
  where n = length [x | x <- pwd, x == c]

match2 :: Task -> Bool
match2 (l, h, c, pwd) = (m l) /=  (m h)
  where m p = pwd !! (p - 1) == c
	
part :: (Task -> Bool) -> [Task] -> Int
part m tasks = length [t | t <- tasks, (m t)]

main :: IO ()
main = do
  fn <- lines <$> readFile "../res/02.input"
  let tasks = toTask <$> fn
  print $ (part match1 tasks, part match2 tasks)