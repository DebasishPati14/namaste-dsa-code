// Best time to buy and Sell stock (LC-121)

function buySellStock(priceArr: number[]) {
  let maxProfit = 0;
  let lowestBuy = priceArr[0];

  for (let i = 1; i < priceArr.length; i++) {
    const profit = priceArr[i] - lowestBuy;
    if (maxProfit < profit) {
      maxProfit = profit;
    }
    if (lowestBuy > priceArr[i]) {
      lowestBuy = priceArr[i];
    }
  }
  console.log({ lowestBuy, maxProfit });
}

const prices = [7, 6, 4, 3, 1];
buySellStock(prices);
