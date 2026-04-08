// QUESTION 1 ------ Contains Duplicate

function checkDuplicate(nums: number[]): boolean {
  const hashMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(nums[i]!)) {
      return true;
    }
    hashMap.set(nums[i]!, 1);
  }

  console.log(`My HashMap`, hashMap);
  return false;
}

const numArr1 = [1, 2, 3, 4, 1, 5, 6];
//console.log(
//  `The elements of array ${numArr1} has duplicate: ${checkDuplicate(numArr1)}`,
//);

// QUESTION 2 ------ InterSectionOfArrays

function findIntersection(nums1: number[], nums2: number[]) {
  const hashMap = new Map<number, number>();
  const result = [];

  for (let i = 0; i < nums1.length; i++) {
    if (hashMap.has(nums1[i]!)) {
      hashMap.set(nums1[i]!, hashMap.get(nums1[i]!)! + 1);
    }
    hashMap.set(nums1[i]!, 1);
  }
  console.log(hashMap);
  for (let i = 0; i < nums2.length; i++) {
    if (hashMap.has(nums2[i]!) && hashMap.get(nums2[i]!)! > 0) {
      hashMap.set(nums2[i]!, hashMap.get(nums2[i]!)! - 1);
      result.push(nums2[i]!);
    }
  }
  return result;
}

const numArr201 = [4, 9, 5];
const numArr202 = [9, 4, 9, 8, 4];

// console.log(
// `The intersection of arrays [${numArr201}] and [${numArr202}] is present in ${findIntersection(numArr201, numArr202)}`);

// QUESTION 3 ------ Maximum Subarray

function maxSubArray(nums: number[]): number {
  let maxSum = 0;
  let currentSum = nums[0]!;

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i]!, currentSum + nums[i]!);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

const numArr3 = [1, -2, 3, 4, -1, 5];
//console.log(`Maximum subarray sum of [${numArr3}] is ${maxSubArray(numArr3)}`);

// QUESTION 4 ------ Sort Colors

function sortColors(nums: number[]): number[] {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  const swap = (idx1: number, idx2: number) => {
    const temp = nums[idx1]!;
    nums[idx1]! = nums[idx2]!;
    nums[idx2]! = temp;
  };

  while (mid <= high) {
    if (nums[mid]! == 0) {
      swap(low, mid); // swap([l], [m])
      mid++;
      low++;
    } else if (nums[mid]! == 1) {
      mid++;
    } else if (nums[mid]! == 2) {
      swap(high, mid); // swap([h], [m])
      high--;
    }
  }
  return nums;
}

const numArr4 = [2, 0, 2, 1, 1, 0];
//console.log(`Sorted colors array: ${sortColors(numArr4)}`);

// QUESTION 5 ------ Product of Array Except Self

function productExceptSelf(nums: number[]): number[] {
  const result: number[] = [];
  let rightProd = 1;
  for(let i  = 0; i<nums.length; i++){
      result[i]! = 1;
  }

  for(let i = 1; i <nums.length; i++){
      result[i]! = nums[i - 1]! * result[i - 1]!;
    //   result[j]! = nums[j + 1]! * result[j + 1 ]!;
      console.log({ iV: nums[i - 1]! * result[i - 1]!, i, })
      console.log({ result })
  }
  
   for(let j = nums.length -2; j >= 0;  j--){
        rightProd *= nums[j + 1]!;
      result[j]! *= rightProd;
      console.log({ jV: nums[j + 1]! * result[j + 1]!, j})
      console.log({ result })
  }
  return result;
}

const numArr5 = [1, 2, 3, 4];
//console.log(
//  `Product except self for [${numArr5}] is ${productExceptSelf(numArr5)}`
//);


// QUESTION 6 ------ Find Numbers Disappeared in an Array

function findDisappearedNumbers(nums: number[]): number[] {
  const result: number[] = [];

  for(let i = 0; i < nums.length; i++){
     const index = Math.abs(nums[i]!) - 1;

     if(index < nums.length && nums[index]! > 0){
         nums[index]! = -nums[index]!;
     }

      console.log({i, nums: nums[i]!});
  }



  for(let i = 0; i < nums.length; i++){
      if(nums[i]! > 0){
        result.push(i + 1);
      }
  }
    return result;
}

const numArr6 = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(
  `Missing numbers in [${numArr6}] are ${findDisappearedNumbers(numArr6)}`
);




// QUESTION 7 ------ Minimum Size Subarray Sum
/*
function minSubArrayLen(target: number, nums: number[]): number {
  // TODO: Implement
  return 0;
}

const numArr7 = [2, 3, 1, 2, 4, 3];
const target7 = 7;
console.log(
  `Minimum subarray length for target ${target7} in [${numArr7}] is ${minSubArrayLen(target7, numArr7)}`
);
*/

// QUESTION 8 ------ Third Maximum Number
/*
function thirdMax(nums: number[]): number {
  // TODO: Implement
  return 0;
}

const numArr8 = [2, 2, 3, 1];
console.log(
  `Third maximum number in [${numArr8}] is ${thirdMax(numArr8)}`
);
*/

// QUESTION 9 ------ Container With Most Water
/*
function maxArea(height: number[]): number {
  // TODO: Implement
  return 0;
}

const numArr9 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(
  `Maximum water container area for [${numArr9}] is ${maxArea(numArr9)}`
);
*/

// QUESTION 10 ------ Running Sum of 1D Array
/*
function runningSum(nums: number[]): number[] {
  // TODO: Implement
  return [];
}

const numArr10 = [1, 2, 3, 4];
console.log(
  `Running sum of [${numArr10}] is ${runningSum(numArr10)}`
);
*/
