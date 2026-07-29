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


// Question - 4
// Majority Element (LC-169) -BOOYRE"S MOORE SOL
function findMajorityElement(numsArr: number[]) {
  let candidate = numsArr[0];
  let count = 1;
  for (let i = 0; i < numsArr.length; i++) {
    if (numsArr[i] == candidate) {
      count++;
    } else {
      if (count == 0) {
        candidate = numsArr[i];
        count = 1;
      } else {
        count--;
      }
    }
  }
  console.log({ candidate });
  return candidate;
}

const numbers = [2, 2, 1, 1, 1, 1, 1, 2, 2];
findMajorityElement(numbers);
*/

// Question - 5
// Rotate an array to it's right(LC-189)
function rotateArray(numsArr: number[], k: number) {
  // 1st rotate the array
  for (
    let i = 0, j = numberArr.length - 1;
    i <= numsArr.length / 2, j >= numsArr.length / 2;
    i++, j--
  ) {
    const temp = numberArr[i];
    numberArr[i] = numberArr[j];
    numberArr[j] = temp;
  }
  console.log({ numberArr });

  // 2nd rotate from 0 to K
  for (let i = 0, j = k - 1; i <= k / 2, j >= k / 2; i++, j--) {
    const temp = numberArr[i];
    numberArr[i] = numberArr[j];
    numberArr[j] = temp;
  }
  console.log({ numberArr });

  // 3rd rotate from K to end
  for (
    let i = k, j = numberArr.length - 1;
    i <= (numsArr.length + k) / 2, j >= (numsArr.length + k) / 2;
    i++, j--
  ) {
    console.log({ Before: numberArr, i, j });
    const temp = numberArr[i];
    numberArr[i] = numberArr[j];
    numberArr[j] = temp;
    console.log({ After: numberArr, i, j });
  }
}

const numberArr = [1, 2, 3, 4, 5, 6, 7],
  idx = 3;
rotateArray(numberArr, idx);
