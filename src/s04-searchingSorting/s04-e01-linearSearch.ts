function linearSearch(nums: number[], target: number) {
  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i]!;
    console.log({ curNum });
    if (curNum == target) {
      return i;
    }
  }
  return -1;
}
const nums1 = [1, 2, 3, 4, 5, 6, 7];
const n1 = 5;
console.log(
  `The index of ${n1} in the array ${nums1}: is: ${linearSearch(nums1, n1)}`,
);
