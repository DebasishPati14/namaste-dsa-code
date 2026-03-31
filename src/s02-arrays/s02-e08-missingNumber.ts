function findMissingNumber(nums: number[]){
    const totalSum = nums.length * (nums.length + 1) / 2;
    let currentSum = 0;

    for(let i = 0; i < nums.length; i++){
        currentSum += nums[i]!;
    }
     console.log({ totalSum, currentSum })
    return totalSum - currentSum;
}

const numArr = [3, 0, 1];
console.log(`missing num in the ${numArr} array is: ${ findMissingNumber(numArr) }`)
