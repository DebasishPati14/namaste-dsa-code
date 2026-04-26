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
    console.log({ sortedArray, curIdx, curEle, i });
  }
  return sortedArray;
}

function insertionSortOriginal(nums: number[]) {
  for (let i = 1; i < nums.length; i++) {
    const element = nums[i]!;
    let prevIdx = i - 1;

    while (prevIdx >= 0 && nums[prevIdx]! > element) {
      nums[prevIdx + 1]! = nums[prevIdx]!;
      prevIdx--;
    }
    console.log({ element, prevIdx });
    nums[prevIdx + 1]! = element;
  }
  return nums;
}

const nums3 = [5, 6, 4, 2, 1, 3];
console.log(
  `The sorting of the array ${nums3} is: \n [${insertionSortOriginal(nums3)}]\n [${insertionSort(nums3)}]`,
);
