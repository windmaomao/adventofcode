Type Box = [Char]

split :: Box -> [Int]
split "" = []
split s = fp : rest
  where parts = break (=='x') s
        fp = read (fst parts)::Int
        rest = split $ drop 1 $ snd parts

wrapBox :: [Int] -> Int
wrapBox b@(l:w:h:[]) = area + minimum b
  where area = sum d * 2
        d = zipWith (*) [l, w, h] [w, h, l]

part1 :: (Foldable t, Functor t) => t Box -> Int
part1 ls = sum $ fmap (wrapBox . split) ls

-- part1 <$> lines <$> getLine
-- part1 <$> lines <$> readFile "02.input"