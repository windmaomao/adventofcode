// 5-17-24
const SYMBOLS_API_BASE_URL =
  "https://api.frontendexpert.io/api/fe/stock-symbols";
const MARKET_CAPS_API_BASE_URL =
  "https://api.frontendexpert.io/api/fe/stock-market-caps";
const PRICES_API_BASE_URL = "https://api.frontendexpert.io/api/fe/stock-prices";

async function trendingStocks(n) {
  const apis = await Promise.all([
    fetch(MARKET_CAPS_API_BASE_URL),
    fetch(SYMBOLS_API_BASE_URL),
  ]);
  const [caps, symbols] = await Promise.all(
    apis.map(async (v) => await v.json())
  );
  caps.sort((a, b) => b["market-cap"] - a["market-cap"]);
  const tops = caps.slice(0, n);
  const topSymbols = tops.map((c) => c.symbol);
  const prices = await (
    await fetch(PRICES_API_BASE_URL + "?symbols=" + JSON.stringify(topSymbols))
  ).json();

  return tops.map((v, i) => {
    const price = prices.find((p) => p.symbol === v.symbol);
    const name = symbols.find((p) => p.symbol === v.symbol);
    return {
      ...v,
      ...price,
      ...name,
    };
  });
}
