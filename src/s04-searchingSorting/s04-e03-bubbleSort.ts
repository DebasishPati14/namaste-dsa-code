function bubbleSort(nums: number[]) {
  for (let i = 0; i < nums.length; i++) {
    let isSwap = false;
    console.log({ nums });
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j]! > nums[i]!) {
        const temp = nums[j]!;
        nums[j] = nums[i]!;
        nums[i]! = temp;
        isSwap = true;
      }
    }
    if (!isSwap) {
      break;
    }
  }
  return nums;
}
const nums3 = [1, 2, 3, 4, 5, 6, 7];
console.log(`The sorting of the array ${nums3} is: ${bubbleSort(nums3)}`);
