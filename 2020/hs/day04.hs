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
eclOptions = ["amb","blu","brn","gry","grn","hzl","oth"]

part1 :: [Passport] -> Int
part1 pps = length $ filter valid pps
	where
		keys g = fmap head g
		haveKeys g = (keys g) `intersect` requiredKeys
		valid g = length (haveKeys g) >= 7

within :: Int -> Int -> String -> Bool
within l h s= n >= l && n <= h
	where n = read s :: Int

lastN :: Int -> String -> String
lastN n xs = drop (length xs - n) xs

takeN :: Int -> String -> String
takeN n xs = take (length xs - n) xs

fieldValid :: [String] -> Bool
fieldValid ["byr", v] = within 1920 2002 v
fieldValid ["iyr", v] = within 2010 2020 v
fieldValid ["eyr", v] = within 2020 2030 v
fieldValid ["hgt", v]
	| unit == "cm" 	= within 150 193 num
	| unit == "in"  = within 59 76 num
	| otherwise = False
	where
		unit = lastN 2 v
		num = takeN 2 v
fieldValid ["hcl", '#':xs] 	= length xs == 6
fieldValid ["hcl", _] 			= False
fieldValid ["ecl", v] = v `elem` eclOptions
fieldValid ["pid", v] = length v == 9
fieldValid ["cid", _] = True
fieldValid [_, _] = False

part2 :: [Passport] -> Int
part2 pps = length $ filter joined pps
	where
		joined g = valid g && valid2 g
		valid2 g = all id $ fieldValid <$> g
		keys g = fmap head g
		haveKeys g = (keys g) `intersect` requiredKeys
		valid g = length (haveKeys g) >= 7

main :: IO ()
main = do
	fn <- lines <$> readFile "../res/04.input"
	let s = pps fn
	print $ part1 s
	print $ part2 s