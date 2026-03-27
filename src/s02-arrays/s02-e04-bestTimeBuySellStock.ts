// const prices = [7, 1, 5, 3, 6, 4];

import isCaseOrDefaultClause = require("typescript");
import ts = require("typescript");

function calculateMaxProfit(prices: number[]) {
    let maxProfit = 0;

    for(let i = 0; i < prices.length; i++) {
        for(let j = i+1; j < prices.length; j++) {
            const currentProfit = prices[j]! - prices[i]!;

            if(currentProfit > maxProfit){
                maxProfit = currentProfit;
            }
        }
    }
    return maxProfit;
}



function calculateMaxProfitWithSingleIteration(prices: number[]) {
    let buyRate =  prices[0];
    let maxProfit = 0;

    for(let i = 1; i < prices.length; i++) {
        const currentProfit = prices[i]! - buyRate;

        if(currentProfit < 0){
            buyRate = prices[i]!;
        } else if( currentProfit > maxProfit){
            maxProfit = currentProfit;
        }
    }
    return maxProfit;
}
const myPrices = [7, 6, 4, 3, 1];
console.log(`Max profit can be earned is: `, { maxProfit: calculateMaxProfit(myPrices), originalSolution: calculateMaxProfitWithSingleIteration(myPrices) })
