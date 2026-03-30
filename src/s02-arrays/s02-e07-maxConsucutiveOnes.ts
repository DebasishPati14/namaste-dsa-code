function findMaxConsucutiveOnes(nums: number[]){
    let maxConsucutive = 0;

    for(let i = 0, j = 0; i < nums.length; i++){
        if(nums[i]! != 0){
            j++;
        }else{
            if(maxConsucutive < j){
                maxConsucutive = j;
            }
            j = 0;
        }
    }
    return maxConsucutive;
}


const arrNnums = [1,0,1,1,0,1];
console.log(`here the max consucutive in this ${arrNnums} array is ${ findMaxConsucutiveOnes(arrNnums)  }`)
