// ===========================
// QUESTION: 1 Reverse String
// ===========================
function printReverseString(orgStr: string, curIdx: number = -1): string {
  console.log({ curIdx });
  if (curIdx == orgStr.length) {
    return '';
  }

  curIdx++;
  let resStr: string = printReverseString(orgStr, curIdx);
  resStr += orgStr.charAt(curIdx);
  return resStr;
}

const str1 = 'abcdefgh';
console.log(`the reverse of string ${str1} is: ${printReverseString(str1)}`);

// ===========================
// QUESTION: 2 Binary Search
// ===========================
function binarySearch(
  nums: number[],
  target: number,
  lowIdx: number = 0,
  highIdx: number = nums.length - 1,
) {
  if (lowIdx > highIdx) {
    return -1;
  }
  const mid = Math.ceil((lowIdx + highIdx) / 2);
  console.log({ lowIdx, highIdx, mid });
  if (nums[mid]! === target) {
    return mid;
  } else if (nums[mid]! < target) {
    return binarySearch(nums, target, mid + 1, highIdx);
  } else {
    return binarySearch(nums, target, lowIdx, mid - 1);
  }
}

const nums2 = [1, 2, 3, 4, 5, 6, 7];
const n2 = 5;
console.log(
  `The index of ${n2} in the array ${nums2}: is: ${binarySearch(nums2, n2)}`,
);

// ===========================
// QUESTION: 3 Climbing Stairs
// ===========================
const results3: number[][] = [];
let totalComb = 0;
function climbingStairs(totalStairs: number, currentPath: number[]) {
  console.log({ results3 });
  if (totalStairs == 0) {
    totalComb++;
    results3.push(currentPath);
    return;
  }
  if (totalStairs < 0) {
    return;
  }
  const step2 = totalStairs - 2;
  const step1 = totalStairs - 1;
  climbingStairs(step2, [...currentPath, 2], 2);

  climbingStairs(step1, [...currentPath, 1], 1);
}

const n3 = 5;
climbingStairs(n3, []);
results3.forEach((ele) => {
  console.log(ele);
});
console.log(`The index of ${n3}  is: ${totalComb}`);

// =============================
// QUESTION: 4  Pow(x, n)
// =============================
function powerX(x: number, n: number): number {
  console.log({ x, n });
  if (n == 0) {
    return 1;
  }
  let res = 1;
  if (n > 0) {
    n = n - 1;
    res = powerX(x, n) * x;
  } else {
    n = n + 1;
    res = powerX(x, n) / x;
  }
  return res;
}

const num4 = 2;
const pow4 = -2; //always be integer
console.log(`The value of ${num4} power 2 is: ${powerX(num4, pow4)}`);

// =============================
// QUESTION: 5  K-th Symbol Grammar
// =============================

function getKthSymbol(num: number, idx: number, res: string = '0') {
  console.log({ res });
  // Key things to remember is that first half of the string is inverse of the
  // second half so res can store only half string
  if (num === 1) {
    return res.charAt(idx) || '0';
  }
  num = num - 1;
  let resultStr = '';
  for (let i = 0; i < res.length; i++) {
    if (res.charAt(i) === '0') {
      resultStr += '01';
    } else {
      resultStr += '10';
    }
  }
  return getKthSymbol(num, idx, resultStr);
}

const n = 1,
  k = 1;
console.log(`The value of ${n}th row in table is: ${getKthSymbol(n, k, '0')}`);
