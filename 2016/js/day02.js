import './array'

const nextNum = {
  '1L': 0, '1R': 2, '1U': 0, '1D': 4,
  '2L': 1, '2R': 3, '2U': 0, '2D': 5,
  '3L': 2, '3R': 0, '3U': 0, '3D': 6,
  '4L': 0, '4R': 5, '4U': 1, '4D': 7,
  '5L': 4, '5R': 6, '5U': 2, '5D': 8,
  '6L': 5, '6R': 0, '6U': 3, '6D': 9,
  '7L': 0, '7R': 8, '7U': 4, '7D': 0,
  '8L': 7, '8R': 9, '8U': 5, '8D': 0,
  '9L': 8, '9R': 0, '9U': 6, '9D': 0,
}

const nextStep = (n, c) => (nextNum[`${n}${c}`] || n)
const lineNum = (n, l) => l.split('').reduce(nextStep, n)

const part1 = list => list
  .scan(lineNum, 5)
  .slice(1)

const nextChar = {
  '1L': ' ', '1R': ' ', '1U': ' ', '1D': '3',
  '2L': ' ', '2R': '3', '2U': ' ', '2D': '6',
  '3L': '2', '3R': '4', '3U': '1', '3D': '7',
  '4L': '3', '4R': ' ', '4U': ' ', '4D': '8',
  '5L': ' ', '5R': '6', '5U': ' ', '5D': ' ',
  '6L': '5', '6R': '7', '6U': '2', '6D': 'A',
  '7L': '6', '7R': '8', '7U': '3', '7D': 'B',
  '8L': '7', '8R': '9', '8U': '4', '8D': 'C',
  '9L': '8', '9R': ' ', '9U': ' ', '9D': ' ',
  'AL': ' ', 'AR': 'B', 'AU': '6', 'AD': ' ',
  'BL': 'A', 'BR': 'C', 'BU': '7', 'BD': 'D',
  'CL': 'B', 'CR': ' ', 'CU': '8', 'CD': ' ',
  'DL': ' ', 'DR': ' ', 'DU': 'B', 'DD': ' ',
}

const nextCharStep = (n, c) => {
  const s = nextChar[`${n}${c}`]
  return s === ' ' ? n : s
}
const lineChar = (n, l) => l.split('').reduce(nextCharStep, n)
const part2 = list => list
  .scan(lineChar, '5')
  .slice(1)
  .join('')

export { nextStep, part1, part2 }
