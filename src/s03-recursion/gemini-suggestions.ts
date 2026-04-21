// ===========================
// QUESTION: 1 Reverse String
// ===========================
function printReverseString(orgStr: string, curIdx: number = -1): string {
  console.log({ curIdx });
  if (curIdx == orgStr.length) {
    return '';
  }

  curIdx++;
  let resStr: string = printReverseString(orgStr, curIdx);
  resStr += orgStr.charAt(curIdx);
  return resStr;
}

const str1 = 'abcdefgh';
console.log(`the reverse of string ${str1} is: ${printReverseString(str1)}`);

// ===========================
// QUESTION: 2 Binary Search
// ===========================
function binarySearch(
  nums: number[],
  target: number,
  lowIdx: number = 0,
  highIdx: number = nums.length - 1,
) {
  const mid = Math.ceil((lowIdx + highIdx) / 2);
  console.log({ lowIdx, highIdx, mid });
  if (lowIdx > highIdx) {
    console.log({ idx: -1 });
    return;
  }
  if (nums[mid]! === target) {
    console.log({ idx: mid });
    return;
  } else if (nums[mid]! < target) {
    binarySearch(nums, target, mid + 1, highIdx);
  } else {
    binarySearch(nums, target, lowIdx, mid - 1);
  }
}

const nums2 = [1, 2, 3, 4, 5, 6, 7];
const n2 = 8;
binarySearch(nums2, n2);
