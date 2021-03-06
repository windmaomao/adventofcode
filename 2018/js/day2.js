const letterAppear = (word) => {
  const stats = word.split('').reduce((acc, letter) => {
    acc[letter] = acc[letter] ? acc[letter] + 1 : 1
    return acc 
  }, {})
  return Object.values(stats).reduce((acc, stat) => {
    if (stat === 2) acc.found2 = true
    if (stat === 3) acc.found3 = true
    return acc
  }, { found2: false, found3: false })
}

console.log(letterAppear('abcdef'))
console.log(letterAppear('bababc'))
console.log(letterAppear('abbcde'))
console.log(letterAppear('abcccd'))
console.log(letterAppear('aabcdd'))
console.log(letterAppear('abcdee'))
console.log(letterAppear('ababab'))


const day2Data = ['prtkqyluibmtcwqaezjmhgfndx', 'prtkqylusbsmcwvaezjmhgfndt', 'prgkqyluibsocwvamzjmhgkndx', 'prjkqyluibsocwvahzjmhgfnsx', 'prtkqylcibsocwvzezjohgfndx', 'prtkqyluiksocwziezjmhgfndx', 'prikqyluiksocwvaezjmkgfndx', 'prtkgyluibsocwvwezjehgfndx', 'prtkqyluiysocwvaezjghxfndx', 'prtkqwluibsoxwvaezjmhgfhdx', 'prtkqylgibsocwvabzjmhzfndx', 'prtknyltibnocwvaezjmhgfndx', 'prdkqyluibrocwvaezjmhgnndx', 'prtwqyluibsoctvcezjmhgfndx', 'mrtkqyluibgocwvakzjmhgfndx', 'prtkqaouibsocwvaezjmhwfndx', 'prtkqyluihjocwvaezjmhgfpdx', 'prtkqyluikfxcwvaezjmhgfndx', 'prtkqybuixsocwvaczjmhgfndx', 'pvtkayluibsocwxaezjmhgfndx', 'grtkqgluibsocdvaezjmhgfndx', 'prlkqyluibsochvaezjmhgzndx', 'prtkqylxibsocmvaezjmhgfkdx', 'prtkqyluibsqctvaezjmpgfndx', 'putkqyluibsocqvaezjmhgfndw', 'prtjqyluibsiclvaezjmhgfndx', 'prtkqylvpvsocwvaezjmhgfndx', 'prnkqyluibsocwvaezjmhefsdx', 'prtktyluibsocwvaezjkhgrndx', 'prtkqyluibcovwvaezjthgfndx', 'prtkqcluibiocwvaezjmhggndx', 'prtkqyluihsocwveezjmhgfydx', 'prtklyluibsocwqaszjmhgfndx', 'prtkqyluibsocwvaezjmfznndx', 'prtkjyluijsocwvaeejmhgfndx', 'prtkqtluibsonwvaexjmhgfndx', 'prtkqyluinsocwbaezjmjgfndx', 'prtkqyluibslckvaezjmhgyndx', 'prtkqyluibsodwlpezjmhgfndx', 'prtkquluibsfcwvaezjhhgfndx', 'prtkqyluhbsocweaezsmhgfndx', 'prrkqyluinsocxvaezjmhgfndx', 'prtkqyluibsoswvaezjmhgyqdx', 'prtkqbluibdocwvlezjmhgfndx', 'prtkqyfuibsocpvaezjmhgfnwx', 'prtkqlluibsqjwvaezjmhgfndx', 'prtkqyluibrocwvaehjmjgfndx', 'prtkqyluibsoowvaezgmhgendx', 'wrtjqyluibsocwvaezfmhgfndx', 'prtvqyluhbsocwvaezjmtgfndx', 'prtkqyllibspcwvaezjmkgfndx', 'pqtzqyeuibsocwvaezjmhgfndx', 'prtkqyluibsolpvaezjmegfndx', 'przkayguibsocwvaezjmhgfndx', 'prtkqyluidsocwvaezjmyufndx', 'prtuqyluibsocwvaezjmfgfnkx', 'prtkqwluibsrcwvaezjchgfndx', 'prtkqyluibsotwhaozjmhgfndx', 'erwkqylhibsocwvaezjmhgfndx', 'prtkqyluibsocwvgezjmkgfedx', 'prskqyluiesocwvaezjmggfndx', 'prtkqylmitsocwvaezjmhgfnox', 'prtkqyluinnocwvaezjmhgfkdx', 'prtktyluibsokwvaezjmhgfcdx', 'prtkqyluibsomwvakvjmhgfndx', 'prtkqyltibloawvaezjmhgfndx', 'prtkqyluibxocwvaezgmhgqndx', 'prtkqyluibskcmvaezjmhgfngx', 'artkqylubbsotwvaezjmhgfndx', 'prtkqyluibzocwvhezjmhgfnbx', 'prskqkluibsocwvaezjmhgfjdx', 'prtkqyluibwocwvaezjkhglndx', 'prukqyluissocwvzezjmhgfndx', 'puhkqyluibsocwvaezjmhgfsdx', 'qrtkqyluibsocwvaeujmhgfndd', 'prtkqyluibsoctvaezjmagfnda', 'prtkquluibsocwkaezjmhgfqdx', 'prtkqyluubswcwvaezjmhvfndx', 'prfkqyluibsocwvaemrmhgfndx', 'pmtkqyluibpocwvaezjmhggndx', 'prtkqvluibiocwvaezjqhgfndx', 'prtkgypuibsocwvaezcmhgfndx', 'prtpqyquibsovwvaezjmhgfndx', 'prtwqyluiasocwvaexjmhgfndx', 'mrtzqyluibbocwvaezjmhgfndx', 'prtkqyluibsocwmaegwmhgfndx', 'prtkqyluibvncwvaqzjmhgfndx', 'prtkqyluiusocwvaezjmhmfbgx', 'prtkqyljibvocwvaezjehgfndx', 'prtkqyloibsopavaezjmhgfndx', 'prckqyakibsocwvaezjmhgfndx', 'prtkqyluibsdcwvaezjmngfddx', 'prekqylupbsocwvaezemhgfndx', 'hrtkqyluibhocwvaezjmhgfnde', 'prmkqyluibsocwvaezzfhgfndx', 'prtkqyluiccfcwvaezjmhgfndx', 'pdtkqyluxbsocwvaezjmhgendx', 'prokqyluibsocwvuezjmsgfndx', 'prtkqyluibsacwvaezjyhgfndv', 'prtkqmluibsocavaezjmhgfndc', 'prtkqyluibsocwvmezjmhgtnqx', 'prtkqytuibiocyvaezjmhgfndx', 'pktkqyiuibsocwvwezjmhgfndx', 'grtrqyluibsocwvaezjmhgfbdx', 'prtkqylsibjocwvaezjmhgfnyx', 'prtkqyhutbsocwvaexjmhgfndx', 'prtknyluibsocmvaezumhgfndx', 'prtkwyluibsocwvahzjmhgpndx', 'prtkqywuibsolhvaezjmhgfndx', 'prtkcyluibsoccvaezjthgfndx', 'prtkqyrdibsocwvaezjbhgfndx', 'prtkqyhuqbsocwvaezjmhgfxdx', 'pytkqyluibsocwvagzjmhgfndv', 'prtkqyliibsocwvaexwmhgfndx', 'prtkqyluibshcwvaeljphgfndx', 'prtkqyluibsocwvaerjzhbfndx', 'prtkqyduibsocwvaezvmhgfnzx', 'drtkqylhibsocwvaezjmhmfndx', 'prtkqyluibsocwvaezamfvfndx', 'brtkqyluqbsocwvaezjmhgpndx', 'prtkqyiuibsocwvuezjmhgfngx', 'urtkqyluibsocqvaeljmhgfndx', 'prtkqyluikaocwvaezjmhgfjdx', 'prqkqzouibsocwvaezjmhgfndx', 'prtkqyluibsocxvaezjmhgfnxv', 'prlkqyluibsoxwvaeijmhgfndx', 'prthuyluibsocwvaezjmhgfnhx', 'potkqyluizsocwvaezjmhifndx', 'fstkqyduibsocwvaezjmhgfndx', 'prtkqxluibsocwvaezjmhgffdm', 'prtkqylpibsozwvaezmmhgfndx', 'prxkqylbibsocwvaezjphgfndx', 'srtkqyluibsicnvaezjmhgfndx', 'prtktyluibsocwvaezjvhgfnax', 'pctkqyluxbsocwvaezwmhgfndx', 'prtkqylusbsoclvaezsmhgfndx', 'pwtkqyluibsocrvaezjmggfndx', 'prtkqyluibswcwraezjmhgfndd', 'prtkqyluibtocwiaezjmhgfnax', 'prtuqyluibsocwvajzjmngfndx', 'pwtkqyluibsocwvaerjmogfndx', 'petkqexuibsocwvaezjmhgfndx', 'pztkqyluibsocwvaerqmhgfndx', 'prtkqyluobsocwvaezjmapfndx', 'prtkqyluiinocwvaeljmhgfndx', 'prtkqyluibsoowvxezjmhgfnnx', 'lrtkqyluibsocwvfezjmhgfndc', 'prtkqyluibokcwvahzjmhgfndx', 'prtkqmlufbsocwvaegjmhgfndx', 'prtkqylribsocwvanzjmhgfnda', 'prtkqyluibspxwvaezkmhgfndx', 'prtiqyluibsbcwvaezjmhgfntx', 'prikqzluinsocwvaezjmhgfndx', 'prtkqnldibsocwvaezjmhxfndx', 'prtkqyluixsocsvaezjmhwfndx', 'hrtkqyluibsocwvaezjhhgfodx', 'prtkqyluibsrcwvaezjmhpfwdx', 'prtkqyluibsocwyaezjmhgffdk', 'prtkqyluidsocwvalmjmhgfndx', 'prukquluabsocwvaezjmhgfndx', 'prckqyluinsmcwvaezjmhgfndx', 'prbkqymuibsocwvaezjmhgfndc', 'prtkfylaibsocwvaezjmkgfndx', 'zrtkqyluibsocwvrbzjmhgfndx', 'crtkqyluibsocwvaejjmkgfndx', 'prttqyluibsocyvaezymhgfndx', 'prtkqylugbsocwvaezjxhgfmdx', 'prtkqyluibsocwdlezjmhgfnbx', 'prtkqjluibsocwvaozjhhgfndx', 'prtcjyluibsocwbaezjmhgfndx', 'rrtkqyluiblocwvaezjmhgundx', 'prtkkyluibsocwfaezjmhgfnyx', 'prtkqyuuibsocwvaezjmhgfogx', 'prtkyyluvbsocwvaezjmhgfnox', 'prpkqyluibyocwvaezjmhggndx', 'pdtkqyluibdocwvaezjmhgfndy', 'prtklysuibsocwvaezjmhgfnwx', 'prtkqyluabsouwvaekjmhgfndx', 'phtkqyluibsocwvaezjmhgfnxt', 'prtkqyxuibsocwvaezjmhpfnqx', 'prtkqyluibsodwsaezdmhgfndx', 'prtkbyluibsohwvaezjmhgfndr', 'xrtkqylhibsocwvtezjmhgfndx', 'prtkqyluvysocwvaezbmhgfndx', 'prtkqieuibsocwvaeojmhgfndx', 'pctkqyluibsocwvanzjmhgfnux', 'vrtkqyluibsozwvaezjmhgandx', 'prtkqyluiusocwvaezjmhmfngx', 'prbkqyluibsockvaxzjmhgfndx', 'prtkqyluibsonwvaczjmhgfndi', 'prtkqyluiblocwvaezjmhgfnau', 'prtkqyluibsocwvafzuchgfndx', 'prdkqyluiysocwvaezjmhgfnax', 'prnkqyouibsocwvaezjmhgfndq', 'mrtkqgluibsocwvpezjmhgfndx', 'pvtkqyluibsocwvaczjmhgnndx', 'trtkqwluibsohwvaezjmhgfndx', 'prmkqyluibsofwvaezjmhgfrdx', 'prtyqyluibpdcwvaezjmhgfndx', 'ertkqylulbsocwvaezjmhgfnax', 'prtkqyluibsacwvaeijmhgfndf', 'prtkqyluibyocwvapzjmhgpndx', 'potkqyluibgocwvaezjmhzfndx', 'prtkqyluibsocwyaezxmhgfnpx', 'prtkqkjuibsncwvaezjmhgfndx', 'prtqqyluibsocwlaezjmhgkndx', 'prtkxyluibnocwvaezjmhgkndx', 'prtkqyluiosocwvapzjmxgfndx', 'prtkqylumbsocwvyezimhgfndx', 'prukqyluibsocwvyezjmhgindx', 'prtkqylbibstcwvaezjxhgfndx', 'pctkqyuuibsocwvaezjuhgfndx', 'vrtkqyluibsocwvaezjmhgfnll', 'urtkqyluibsopwvaezjphgfndx', 'prtkceluibsocwvaepjmhgfndx', 'prwkxyluibsocwvaezjmhgfnzx', 'prtkqyluitsocwvaezqzhgfndx', 'prtkqkauibsorwvaezjmhgfndx', 'prtkqyluibsocwvaezfmftfndx', 'prtkiybuibsocwvaezjkhgfndx', 'prtkzyluibsocwgaezjmvgfndx', 'prtkqyluibsocwvaezjmhgqnxg', 'prtkqyluimsocwvauzjwhgfndx', 'prtkqyluibsacwgaezjmhgfndd', 'pwtkuyluibsccwvaezjmhgfndx', 'prtkqyluibsoawvaezjmvgfnlx', 'prtkqyluabsocwwaezjmhgftdx', 'patkqylnibsocwvaezjmhgfnox', 'prtkqyluibsocwlaxzkmhgfndx', 'pbtkqpluibsfcwvaezjmhgfndx', 'prtkqyluibsoywsaezjmhgxndx', 'prtkqyluibfocwvaezjyhgfhdx', 'pltbqylcibsocwvaezjmhgfndx', 'prtkdyluiisocwvvezjmhgfndx', 'prtkqkxuibsokwvaezjmhgfndx', 'prtkqyluibsoawvaezzmhgfndm', 'petkqyluibsgcwvaezjmhgfndu', 'prtkqyluibsoyxvaezjmlgfndx', 'prtkqyluibxocwvaezgmhnfndx', 'prtkikluibsocwvwezjmhgfndx', 'prbkqyluibsocwvaezjhhgfnux', 'prtkqylufbsxcwvaezjmhgfnfx', 'prtkqyluibsdcdvaezjmhgxndx', 'potkiyluibsocwvaezjmhkfndx', 'prtkqyluiosocsvhezjmhgfndx', 'prtkqyluibsocqbaezomhgfndx', 'prtihyluibsocwvaeujmhgfndx', 'prtuquruibsocwvaezjmhgfndx', 'prtkqyloibsocwvaeztmhifndx', 'ertuqyluibsocwvaeajmhgfndx']
// const day2Data = ['bababc', 'cababc']
const day2Stats = day2Data.reduce((acc, word) => {
  const stats = letterAppear(word)
  if (stats.found2) { acc.count2++ }
  if (stats.found3) { acc.count3++ }
  return acc
}, { count2: 0, count3: 0 })
console.log('Day 2-1:', day2Stats)

String.prototype.removeCharAt = function (i) {
  var tmp = this.split(''); // convert to an array
  tmp.splice(i - 1, 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
  return tmp.join(''); // reconstruct the string
}

const pos = 24
const day2Match = () => {
  const arr = day2Data.map(s => s.removeCharAt(pos))
  const filtered = arr.filter((el, index) => arr.indexOf(el) !== index)
  const duplicates = [...new Set(filtered)]
  return duplicates
}

console.log('Day 2-2:', day2Match())
