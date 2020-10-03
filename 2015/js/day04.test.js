import { md5Match, part1 } from './day03'
// import read from './read'

// const extractDirs = strs => strs.split('').map(c => dirs[c])

describe('2015 Day 04', () => {

  // const dirs = extractDirs(read('03')[0])

  it('part1 md5Match', () => {
    expect(md5Match('abcdef', 5)(609043)).toEqual(true)
  })


})
