module Main where

import Data.Array

-- dynamic version I
fib' max = go max
  where go 0 = 0
        go 1 = 1
        go n = fibs ! (n - 1) + fibs ! (n - 2)
        fibs = listArray (0, max) [go x | x <- [0..max]]

-- dynamic version II
memoized_fib :: Int -> Integer
memoized_fib = (map fib [0 ..] !!)
  where fib 0 = 0
        fib 1 = 1
        fib n = memoized_fib (n-2) + memoized_fib (n-1)
      
main :: IO ()
main = print (fib' 1000)