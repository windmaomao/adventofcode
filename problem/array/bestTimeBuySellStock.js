// recursion
function maxProfit(prices) {
  let m = {};

  function findMax(i, canSell) {
    if (i == prices.length) return 0;

    const k = `${i}-${canSell ? 1 : 0}`;
    if (k in m) return m[k];

    let res;
    if (!canSell) {
      res = Math.max(-prices[i] + findMax(i + 1, true), findMax(i + 1, false));
    } else {
      res = Math.max(prices[i], findMax(i + 1, true));
    }

    m[k] = res;
    return res;
  }

  return findMax(0, false);
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));

// array
function maxProfit(prices) {
  let buyPrice = Infinity,
    max = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buyPrice) {
      buyPrice = prices[i];
    } else {
      let sale = prices[i] - buyPrice;
      max = Math.max(sale, max);
    }
  }

  return max;
}
