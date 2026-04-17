// ===============================
// Question 1: Sum of Digits

import ts = require('typescript');

// ===============================
let totalSumOfDigits = 0;

function findSumOfDigits(num: number) {
  console.log({ num });
  if (num <= 0) {
    return totalSumOfDigits;
  } else {
    totalSumOfDigits = totalSumOfDigits + (num % 10);
    num = Math.round(num / 10);
    return findSumOfDigits(num);
  }
}

const n1 = 1234;
// console.log(`Total sum of digits in ${n1} is: ${findSumOfDigits(n1)}`);

// ===============================
// Question 2: Reverse a Number
// ===============================
let reversedNum = 0;

function findReverseNum(num: number) {
  console.log({ num });
  if (num == 0) {
    return reversedNum;
  } else {
    reversedNum = reversedNum * 10 + (num % 10);
    num = Math.round(num / 10);
    return findReverseNum(num);
  }
}

const n2 = 1234;
//console.log(`The reverse of number ${n2} is: ${findReverseNum(n2)}`);

// ===============================
// Question 3: Check Palindrome Number and String
// ===============================
function isStringPalindrome(
  orgString: string,
  revString: string = '',
  curIdx: number = orgString.length - 1,
) {
  console.log({ revString });
  if (curIdx < 0) {
    return orgString === revString;
  } else {
    revString += orgString.charAt(curIdx);
    curIdx--;
    return isStringPalindrome(orgString, revString, curIdx);
  }
}

function isNumberPalindrome(num: number) {}

const s3 = 'recursionoisrucer';
const n3 = 121;

//console.log(`Is number ${n3} a palindrome? ${isNumberPalindrome(n3)}`);
//console.log(`Is string ${s3} a palindrome? ${isStringPalindrome(s3)}`);

// ===============================
// QUESTION 4: Remove all occurance of a char
// ===============================
function removeOccuranceChar(
  orgStr: string,
  remChar: string,
  newStr: string = '',
  curIdx: number = 0,
) {
  if (curIdx == orgStr.length) {
    return newStr;
  } else {
    if (orgStr.charAt(curIdx) != remChar) {
      newStr += orgStr.charAt(curIdx);
    }
    curIdx++;
    return removeOccuranceChar(orgStr, remChar, newStr, curIdx);
  }
}

const str4 = 'recursion';
const targetChar = 'r';
//console.log(`The ${str4} will be after removing the char ${targetChar} is: ${ removeOccuranceChar(str4, targetChar, '', 0) }`);

// ===============================
// Question 5: Is Araay Sorted
// ===============================

function isArraySorted(nums: number[], curIdx: number = 0) {
  if (nums.length == curIdx) {
    return true;
  } else {
    if (nums[curIdx]! > nums[curIdx + 1]!) {
      return false;
    }
    curIdx++;
    return isArraySorted(nums, curIdx);
  }
}

const nums5 = [1, 2, 3, 4, 5];
//console.log(
//  `Check if the array of ${nums5} is sorted: ${isArraySorted(nums5)}`,
//);

// ===============================
// Question 6: All Indices Of Array
// ===============================

function findIndices(
  nums: number[],
  target: number,
  resArr: number[] = [],
  curIdx: number = 0,
): number[] {
  if (curIdx == nums.length) {
    return resArr;
  } else {
    if (nums[curIdx] != target) {
      resArr.push(nums[curIdx]!);
    }
    curIdx++;
    return findIndices(nums, target, resArr, curIdx);
  }
}

const num6 = [1, 2, 3, 2, 4, 2];
const n6 = 2;
//console.log(`Is ${num6} a prime number? [${findIndices(num6, n6)}]`);

// ===============================
// Question 7: All Possible Subsequences
// ===============================

function findAllSubsequences(orgStr: string, subStr: string[] = [''], curIdx: number = 0){
     console.log({subStr})
    if(curIdx == orgStr.length){
        return subStr;
    }else {
        subStr.forEach( strvalue => {
            subStr.push(strvalue + orgStr.charAt(curIdx));
        });
        curIdx++;
        return findAllSubsequences(orgStr, subStr, curIdx);
    }
}

function originalSolutionAllSubsequences(orgStr: string, subStr: string = ''): void {
    if(orgStr == ''){
        console.log(`'${subStr}'`);
        return;
    }
    const curChar = orgStr.charAt(0);
    orgStr = orgStr.substr(1);
    originalSolutionAllSubsequences(orgStr, subStr + '');
    originalSolutionAllSubsequences(orgStr, subStr + curChar);
}

const str7 = "abc";
console.log(`Fibonacci term at position ${str7}: ${findAllSubsequences(str7)}`);
originalSolutionAllSubsequences(str7);


// ===============================
// Question 8: Find Largest Digit
// ===============================
/*
function findLargestDigit(num: number){

}

const n8 = 93847;
console.log(`Largest digit in ${n8}: ${findLargestDigit(n8)}`);
*/

// ===============================
// Question 9: Sum of First N Natural Numbers
// ===============================
/*
function sumOfNaturalNumbers(num: number){

}

const n9 = 10;
console.log(`Sum of first ${n9} natural numbers: ${sumOfNaturalNumbers(n9)}`);
*/

// ===============================
// Question 10: Check Armstrong Number
// ===============================
/*
function isArmstrong(num: number){

}

const n10 = 153;
console.log(`Is ${n10} an Armstrong number? ${isArmstrong(n10)}`);
*/
