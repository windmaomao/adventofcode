items.forEach((i, ii) => {
  items.forEach((j, jj) => {
    if (ii != jj) {
      const gravity = _minus(j.p, i.p)
      const sign = _sign(gravity)
      v[ii] = _plus(v[ii], sign)
    }
  })
})


p0, p1, p2, p3
v0, v1, v2, v3

dv[0] = Math.abs(p1[0] - p0[0]) + 
  Math.abs(p2[0] - p0[0]) +
  Math.abs(p3[0]- p0[0])

