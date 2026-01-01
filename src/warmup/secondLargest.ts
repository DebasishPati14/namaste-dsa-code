function getSecondLargest(arr: number[]): number {
  if (arr.length < 2) {
    throw new Error('Array must have at least two elements.');
  }
  let firLargeNum: number = arr[0]!;
  let secLargeNum: number = firLargeNum;

  for (let index = 0; index < arr.length; index++) {
    if (firLargeNum < arr[index]!) {
      secLargeNum = firLargeNum;
      firLargeNum = arr[index]!;
    }
  }
  return secLargeNum;
}

const secondLargest = getSecondLargest([14, 58, 47, 55, 4, 87, 456]);
console.log({ secondLargest });
