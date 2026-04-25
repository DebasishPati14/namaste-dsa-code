function insertionSort(nums: number[]) {
  const sortedArray: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const curEle = nums[i]!;
    let curIdx = i - 1;
    for (let j = sortedArray.length - 1; j >= 0; j--) {
      //console.log({ sortedArray, i, j });
      if (sortedArray[j]! < curEle) {
        curIdx = j;
        break;
      } else {
        sortedArray[j + 1]! = sortedArray[j]!;
      }
      curIdx--;
    }
    sortedArray[curIdx + 1] = curEle;
    console.log({sortedArray, curIdx, curEle, i})
      }
  return sortedArray;
}

const nums3 = [5, 6, 4, 2, 1, 3];
console.log(`The sorting of the array ${nums3} is: ${insertionSort(nums3)}`);
