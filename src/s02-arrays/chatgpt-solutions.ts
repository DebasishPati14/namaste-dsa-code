// QUESTION 1 ------ Two Sum Sorted Array
function twoSumOfSortedArray(nums: number[], targetSum: number){
    
    for(let i = 0, j = nums.length - 1; i < nums.length && j >= 0;){
        if(nums[i]! + nums[j]! == targetSum){
            return [i, j];
        }else if(nums[i]! + nums[j]! > targetSum){
            j--;
        }else{
            i++;
        }
        console.log({ i, j, sum: nums[i]! + nums[j]! })
    }
}

const numArr =  [2,7,11,15];
const target = 9;

console.log(`The target sum of array ${numArr} is present in ${twoSumOfSortedArray(numArr, target)}`);


// QUESTION 2 ------ Square Of Sorted Array
function squareOfSortedArray(nums: number[]){
    let i = 0,j = nums.length - 1;
    const newArr = [...nums];
    
    for(let pos = nums.length-1;  pos >= 0 ; pos--){
        if(Math.pow(nums[i]!,2) > Math.pow(nums[j]!,2)){
            newArr[pos] =  Math.pow(nums[i]!,2);
            i++;
        }else{
            newArr[pos] = Math.pow(nums[j]!,2);
            j--;
        }
        console.log({ i, j,pos,  sum: Math.pow(nums[i]!,2)  })
    }
    return newArr;
}

const numArr2 =  [-4,-1,0,3,10];

console.log(`The target sum of array ${numArr} is present in ${squareOfSortedArray(numArr2)}`);
