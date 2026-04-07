function getSecondLargest(arr: number[]): number {
  if (arr.length < 2) {
    throw new Error('Array must have at least two elements.');
  }

  let firLargeNum: number = -Infinity;
  let secLargeNum: number = firLargeNum;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index]! > firLargeNum) {
      secLargeNum = firLargeNum;
      firLargeNum = arr[index]!;
    } else if (arr[index]! > secLargeNum) {
      secLargeNum = arr[index]!;
    }
  }
  return secLargeNum;
}

const secondLargest = getSecondLargest([14, -586, 243]);
// const secondLargest = getSecondLargest([14, 58, 47, 55, 4, 87, 456]);
console.log({ secondLargest });
