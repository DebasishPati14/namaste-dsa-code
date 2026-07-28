/*
// Question - 1
// Draw upside down triangle

//  *	*	*	*	*
//  *	*	*	*
//  *	*	*
//  *	*
//  *

//     #	 #	#  #	#
//        #  #	 #
//          #
 
function drawUpsideDownRightAngledTriangle(length: number) {
  let printStr = '';
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      printStr += '*\t';
    }
    console.log(printStr);
    printStr = '';
  }
}

function drawUpsideDownTriangle(length: number) {
  let printStr = '';
  for (let i = 0; i < length / 2; i++) {
    for (let j = 0; j < i; j++) {
      printStr += '\t';
    }
    for (let j = i; j < length - i; j++) {
      printStr += '#\t';
    }
    console.log(printStr);
    printStr = '';
  }
}
drawUpsideDownTriangle(7);
console.log('Done ');
drawUpsideDownRightAngledTriangle(5);

// Question - 2
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
*/

// Question - 3
//Find the pivot index (LC-724)

function findPivotIdx(numArr: number[]) {
  let totalSum = 0;

  for (let i = 0; i < numArr.length; i++) {
    totalSum += numArr[i];
  }
  let leftSum = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (leftSum == (totalSum - numArr[i]) / 2) {
      console.log({ idx: i });
      return i;
    } else {
      leftSum += numArr[i];
    }
  }
  console.log({ idx: -1 });
}

const nums = [1, 2, 3];
findPivotIdx(nums);
