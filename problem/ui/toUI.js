function toUi(o, id = 'root') {
  const children = Object.keys(o).map(cid => {
    const value = o[cid]
    if (typeof value === 'object') {
      return toUi(value, cid)
    }
    
    return { id: cid, value }
  })
  
  return { id, children }
}

const { log } = console
log(toUi({ i: 1 }))
log(toUi({ i: 1, sum: 1 }))
log(toUi([1, 2], 'arr'))
log(toUi({ arr: [1, 2], i: 1 }))