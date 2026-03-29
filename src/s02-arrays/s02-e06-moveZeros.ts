function moveZerosEnd(nums: number[]) {
    let j = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != 0){
            nums[j]! = nums[i]!;
            j++;
        }
    }

    for(let i = nums.length -1; i >= j; i--){
        nums[i]! = 0;
    }

    return nums;
}

const numsArr = [0,1,0,3,12];
console.log(`After moving the array: before=${numsArr}, after=${moveZerosEnd(numsArr)}`);
