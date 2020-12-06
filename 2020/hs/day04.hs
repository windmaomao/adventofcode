import Data.List (intersect)
import Data.List.Split (splitOn)

-- [["eyr", "2027"], ["hgt", "60in"]]
type Passport = [[String]]

pps :: [String] -> [Passport]
pps lines = keyvalue <$> group <$> groups
	where
		groups = splitOn [""] lines
		group g = concat $ fmap (splitOn " ") g
		keyvalue g = fmap (splitOn ":") g
		
requiredKeys = ["byr","iyr","eyr","hgt","hcl","ecl","pid"]

part1 :: [Passport] -> Int
part1 pps = length $ filter valid pps
	where
		keys g = fmap head g
		requires = ["byr"]
		haveKeys g = (keys g) `intersect` requiredKeys
		valid g = length (haveKeys g) >= 7
		
main :: IO ()
main = do
	fn <- lines <$> readFile "../res/04.input"
	print $ part1 $ pps fn