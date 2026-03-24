function removeDuplicateFromSortedArray(numArr: number[]) {
    
    for(let i = 1, k = 1; i < numArr.length; i++){

    //   if(i == 0){
    //      k++;
    //      continue;
    //    }

        if(numArr[k-1]! < numArr[i]!){
            numArr[k] = numArr[i]!;
            k++;
        }
    }
    return numArr;
}


const myArray = [0, 0, 1, 1, 2, 2, 2 , 3, 3, 3 ,3];
console.log(`After removing duplicate: [ ${removeDuplicateFromSortedArray(myArray)} ]`)
