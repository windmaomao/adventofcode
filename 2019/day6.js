const filereader = require('./utils/filereader.js')
const data = filereader.readFile('/day6.data')

const nodeMap = data.reduce((acc, raw) => {
  const p = raw.split(')')
  const child = p[1], parent = p[0]
  if (!acc[parent]) acc[parent] = { cs: [], ps: [], l: 0 }
  if (!acc[child]) acc[child] = { cs: [], ps: [], l: 0 }
  acc[parent].cs.push(child)
  acc[child].ps.push(parent)

  return acc
}, {})

const nodeKeys = Object.keys(nodeMap)

const roots = nodeKeys.reduce((acc, k) => {
  const n = nodeMap[k]
  if (!n.ps.length) acc.push(k)
  return acc
}, [])

function tranv(pk) {
  const parent = nodeMap[pk]
  parent.cs.forEach(ck => {
    const child = nodeMap[ck]
    child.l = parent.l + 1
    tranv(ck)
  })
}

console.log(roots)

roots.forEach(rk => {
  tranv(rk)
})

console.log('Day 5-1:', nodeKeys.reduce(
  (acc, k) => {
    return acc + nodeMap[k].l
  }, 0
))

// COM, K9X, 1PX

function tranv2(pk, target, found, lvl) {
  // console.log(pk)
  if (found) return true
  if (pk === target) {
    console.log('Found', lvl)
    return true
  }

  const parent = nodeMap[pk]
  if (!parent.cs.length) return false

  for(let i=0; i<parent.cs.length; i++) {
    const ck = parent.cs[i]
    const f2 = tranv2(ck, target, false, lvl+1)
    if (f2) return true
  }
  return false
}

// '35S'
const root =  'T84' // 'K4C' // 'NHG' // '1XS' // '2S3' // 'CG2' // '9PN' // 'YPD' // '3MR' // 'NS9' // 'SCX' // '439' // 'W9W' // 'CW6' // 'JJ2' // 'C66' // '4T3' // 'T8V' // '4JG' // 'S96' // 'VK6' // 'TPP' // 'PMD' // 'Q63' // 'WDK' // 'LXJ' // 'FPL' 
// 'CT7' // 'WXJ' // '9QY' // 'PDX' // 'ZZZ' 
// 'ZVM' // 'BL5' // 'NCP' // 'WF3' // '1LQ' // 'Z27' // 'KMJ' // 'R72' 
// 'B7R' // 'WBH' // 'VQT' // 'RQT' // '8VF' // 'CGL' // 'B9W' 
// '6GC' // 'S3N' // '6R3' // '7CM' // '751' // 'XH1' 
// '92R' // 'R3L' // 'F7V' // '1VG' // 'CMZ'
// 'Z7D' // 'HFV' // '2KZ' // 'XZQ' // 'SNN' 
// 'PVY' // 'J2L' // '1PX' // 'K9X' // 'COM'

console.log('Day 6-2: YOU/SAN', 
  tranv2(root, 'YOU', false, 0),
  tranv2(root, 'SAN', false, 0)
)

console.log('Day 6-2:', 

)

// COM, K9X

// const data = ['COM)B','B)C','C)D','D)E','E)F','B)G','G)H','D)I','E)J','J)K','K)L']

