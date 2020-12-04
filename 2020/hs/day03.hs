module Main where

traverse :: Int -> [String] -> Int

main :: IO ()
main = do
  fn <- lines <$> readFile "../res/03.input"
  print fn
	
	
--	const traverse = (slop, odd = false) => {
--		const res = fn.reduce((acc, s, index) => {
--			if (odd && (index % 2 == 1)) return acc
--			acc.c += s[acc.i] === '#' ? 1 : 0
--			acc.i = (acc.i + slop) % n
--			return acc
--		}, { i: 0, c: 0 })
--		return res.c
--	}
