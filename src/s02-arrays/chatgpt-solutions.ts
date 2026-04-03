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

// console.log(`The target sum of array ${numArr} is present in ${twoSumOfSortedArray(numArr, target)}`);




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

// console.log(`The target sum of array ${numArr2} is present in ${squareOfSortedArray(numArr2)}`);




// QUESTION 3 ------ Pivot Index
function pivotIndexArray(nums: number[]){
    let totalSum = 0;
    
    for(let i = 0; i < nums.length; i++){
        totalSum += nums[i]!;
    }

    let currentSum = 0;
    for(let i = 0; i < nums.length; i++){
        if(totalSum - nums[i]! - currentSum == currentSum){
            return i;
        }
        currentSum += nums[i]!;
    }
   return -1;
}

const numArr3 = [1, 3, 7, 6, 5, 6];

console.log(`The pivot index of array ${numArr3} is present in ${ pivotIndexArray(numArr3) }`);






// QUESTION 4 ------ Majority Element
function majorityElement(nums: number[]){
    if(nums.length == 1)
        return nums[0]!;

    let majorElement = nums[0]!;
    let count = 1;

    for(let i = 1; i < nums.length; i++){
        if(majorElement == nums[i]){
            count++;
        } else{
            if(count == 0){
                majorElement = nums[i]!;
                count = 1;
            }else{
            count--;
        }
    }
    }

    let currentCount = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i]! == majorElement){
            currentCount++;
        }
    }

    return currentCount > nums.length/2 ? majorElement : NaN; 
}

const numArr4 = [2,2,1,1,1,2,2];

console.log(`The majority of in the array ${ numArr4 } is ${ majorityElement(numArr4)  }`)
