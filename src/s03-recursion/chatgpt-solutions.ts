// Question 1: Sum of Digits
let totalSumOfDigits = 0;
function findSumOfDigits(num: number){
    console.log({ num })
    if(num <= 0){
        return totalSumOfDigits;
    }else{
        totalSumOfDigits = totalSumOfDigits + (num % 10);
        num = Math.round(num / 10);
        return findSumOfDigits(num);
    }
}

const n1 = 1234;
console.log(`Total sum of digits in ${n1} is: ${findSumOfDigits(n1)}`);



// Question 2: Reverse a Number
/*
let reversedNum = 0;

function findReverseNum(num: number){

}

const n2 = 1234;
console.log(`The reverse of number ${n2} is: ${findReverseNum(n2)}`)
 */




// Question 3: Check Palindrome (String)
/*
function isPalindrome(str: string, start: number = 0, end: number = str.length - 1): boolean {
    if (start >= end) return true;

    if (str[start] !== str[end]) return false;

    return isPalindrome(str, start + 1, end - 1);
}

const s1 = "racecar";
console.log(`Is "${s1}" a palindrome? ${isPalindrome(s1)}`);
*/



// Question 4: Remove All Occurrences of a Character
/*
function removeChar(str: string, char: string): string {
    if (str.length === 0) return "";

    let firstChar = str[0] === char ? "" : str[0];

    return firstChar + removeChar(str.slice(1), char);
}

const s2 = "recursion";
const ch = 'r';
console.log(`String after removing '${ch}': ${removeChar(s2, ch)}`);
*/



// Question 5: Check if Array is Sorted
/*
function isSorted(arr: number[], index: number = 0): boolean {
    if (index >= arr.length - 1) return true;

    if (arr[index] > arr[index + 1]) return false;

    return isSorted(arr, index + 1);
}

const arr1 = [1, 2, 3, 4, 5];
console.log(`Is array sorted? ${isSorted(arr1)}`);
*/



// Question 6: Find All Indices of a Target
/*
function findAllIndices(arr: number[], target: number, index: number = 0, result: number[] = []): number[] {
    if (index >= arr.length) return result;

    if (arr[index] === target) {
        result.push(index);
    }

    return findAllIndices(arr, target, index + 1, result);
}

const arr2 = [1, 2, 3, 2, 4, 2];
const target = 2;
console.log(`Indices of ${target}: ${findAllIndices(arr2, target)}`);
*/



// Question 7: Print All Subsequences
/*
function getSubsequences(str: string, index: number = 0, current: string = "", result: string[] = []): string[] {
    if (index === str.length) {
        result.push(current);
        return result;
    }

    // include
    getSubsequences(str, index + 1, current + str[index], result);

    // exclude
    getSubsequences(str, index + 1, current, result);

    return result;
}

const s3 = "abc";
console.log(`Subsequences: ${JSON.stringify(getSubsequences(s3))}`);
*/



// Question 8: Subsequence Sum = K
/*
function subsequenceSumK(arr: number[], k: number, index: number = 0, current: number[] = [], result: number[][] = []): number[][] {
    if (index === arr.length) {
        const sum = current.reduce((a, b) => a + b, 0);
        if (sum === k) result.push([...current]);
        return result;
    }

    // include
    current.push(arr[index]);
    subsequenceSumK(arr, k, index + 1, current, result);

    // backtrack
    current.pop();

    // exclude
    subsequenceSumK(arr, k, index + 1, current, result);

    return result;
}

const arr3 = [1, 2, 1];
const k = 2;
console.log(`Subsequences with sum ${k}: ${JSON.stringify(subsequenceSumK(arr3, k))}`);
*/



// Question 9: Generate All Subsets (Power Set)
/*
function generateSubsets(arr: number[], index: number = 0, current: number[] = [], result: number[][] = []): number[][] {
    if (index === arr.length) {
        result.push([...current]);
        return result;
    }

    // include
    current.push(arr[index]);
    generateSubsets(arr, index + 1, current, result);

    // backtrack
    current.pop();

    // exclude
    generateSubsets(arr, index + 1, current, result);

    return result;
}

const arr4 = [1, 2, 3];
console.log(`Subsets: ${JSON.stringify(generateSubsets(arr4))}`);
*/



// Question 10: Permutations of an Array
/*
function generatePermutations(arr: number[], index: number = 0, result: number[][] = []): number[][] {
    if (index === arr.length) {
        result.push([...arr]);
        return result;
    }

    for (let i = index; i < arr.length; i++) {
        // swap
        [arr[index], arr[i]] = [arr[i], arr[index]];

        generatePermutations(arr, index + 1, result);

        // backtrack
        [arr[index], arr[i]] = [arr[i], arr[index]];
    }

    return result;
}

const arr5 = [1, 2, 3];
console.log(`Permutations: ${JSON.stringify(generatePermutations(arr5))}`);
*/
