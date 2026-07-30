let totalSum = 0;
let evenSum = 0;
let oddSum = 0;
const nums = [1, 2, 3, 4, 5, 6, 7, 8];

function sumOfAllNumsInArray(index: number = 0){
    if(index == nums.length){
        return;
    }

    totalSum += nums[index]!;
    index++;
    sumOfAllNumsInArray(index);
}


function sumOfEvenNumsInArray(index: number = 0){
    if(index == nums.length){
        return;
    }

    if(nums[index]! % 2 == 0){
        evenSum += nums[index]!;
    }

    index++;
    sumOfEvenNumsInArray(index);
}


function sumOfOddNumsInArray(index: number = 0){
    if(index == nums.length){
        return;
    }

    if(nums[index]! % 2 != 0){
       oddSum += nums[index]!;
    }

    index++;
    sumOfOddNumsInArray(index);
}


sumOfAllNumsInArray();
sumOfOddNumsInArray();
sumOfEvenNumsInArray();

console.log(`The total sum of array ${nums}`, {totalSum}, '\nOdd sum is', {oddSum}, '\nEven Sum', {evenSum});
