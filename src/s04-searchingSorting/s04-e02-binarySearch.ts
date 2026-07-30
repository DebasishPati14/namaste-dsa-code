function binarySearch(nums: number[], target: number) {
  let highIdx = nums.length - 1;
  let lowIdx = 0;
  while (highIdx >= lowIdx) {
    const mid = Math.floor((highIdx + lowIdx) / 2);
    const curNum = nums[mid]!;

    if (curNum == target) {
      return mid;
    } else if (curNum < target) {
      lowIdx = mid + 1;
    } else {
      highIdx = mid - 1;
    }
  }
  return -1;
}
const nums2 = [1, 2, 3, 4, 5, 6, 7];
const n2 = 5;
console.log(
  `The index of ${n2} in the array ${nums2}: is: ${binarySearch(nums2, n2)}`,
);
