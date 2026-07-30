function mergeSort(arr: number[]): number[] {
  if (arr.length == 1) {
    // console.log({ arr });
    return arr;
  }
  const mid = Math.ceil(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  const res1 = mergeSort(leftArr);
  const res2 = mergeSort(rightArr);

  return sortArrays(res1, res2);
}

function sortArrays(arr1: number[], arr2: number[]) {
  let i = 0;
  let j = 0;

  const res: number[] = [];
  for (; i < arr1.length && j < arr2.length; ) {
    if (arr1[i]! < arr2[j]!) {
      res.push(arr1[i]!);
      i++;
    } else {
      res.push(arr2[j]!);
      j++;
    }
  }
  if (i == arr1.length) {
    while (j < arr2.length) {
      res.push(arr2[j]!);
      j++;
    }
  } else {
    while (i < arr1.length) {
      res.push(arr1[i]!);
      i++;
    }
  }
  console.log('Here it came', res);

  return res;
}

const nums3 = [5, 6, 4, 2, 1, 3];
console.log(`The sorting of the array ${nums3} is: ${mergeSort(nums3)}`);
