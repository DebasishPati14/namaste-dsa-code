function findMaxConsecutiveOnes(nums: number[]){
    let maxConsecutive = 0;

    for(let i = 0, j = 0; i < nums.length; i++){
        if(nums[i]! != 0){
            j++;
        }else{
            if(maxConsecutive < j){
                maxConsecutive = j;
            }
            j = 0;
        }
    }
    return maxConsecutive;
}


const arrNums = [1,0,1,1,0,1];
console.log(`here the max consecutive in this ${arrNums}\n array is ${ findMaxConsecutiveOnes(arrNums)  }`)
