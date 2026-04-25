function selectionSort(nums: number[]) {
  for (let i = 0; i < nums.length; i++) {
    let lowestIdx = i;
    for (let j = i + 1; j < nums.length; j++) {
      console.log({ i: nums[lowestIdx]!, j: nums[j]! });
      if (nums[lowestIdx]! > nums[j]!) {
        lowestIdx = j;
      }
    }
    console.log({ lowestIdx });
    if (lowestIdx !== i) {
      const temp = nums[lowestIdx]!;
      nums[lowestIdx]! = nums[i]!;
      nums[i]! = temp;
    }
  }
  return nums;
}
const nums3 = [8, 4, 5, 6, 7, 1, 2, 3];
console.log(`The sorting of the array ${nums3} is: ${selectionSort(nums3)}`);
