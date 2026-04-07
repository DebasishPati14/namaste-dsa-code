function findSingleNumber(nums: number[]){
    let xorSum = 0;

    for(let i = 0; i < nums.length; i++){
        xorSum ^= nums[i]!;
        console.log({ xorSum, i });
    }

    return xorSum;
}

const arrNum = [6, 1, 2, 1, 2, 4, 6];
console.log(`the single num in arr(${ arrNum }) is: ${ findSingleNumber(arrNum) }`)
