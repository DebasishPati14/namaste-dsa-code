
const mergeSortedArray = function (numArr1: number[], m: number, numArr2: number[], n:number){

    for(let i = m - 1, j = n - 1, k = nums1.length-1; k >= 0; k--){
        if(i > 0 && j > 0 && numArr1[i]! > numArr2[j]!){
            numArr1[k]! = numArr1[i]!;
            i--;
        } else if( j> 0) {
            numArr1[k]! = numArr2[j]!;
            j--;
        }else{
            numArr1[k]! = numArr1[i]!;
            i--;
        }
        console.log("i = ", i, "j = ", j, "k = ", k)
    }
    return numArr1;
}




const nums1 = [1,2,2,5,0,0,0];
const  nums2 = [2,3,4,6];

console.log(`the merged sorted array is:  ${ mergeSortedArray(nums1, 4, nums2, 4)  }`)
