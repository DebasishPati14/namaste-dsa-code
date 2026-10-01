const largestOddNumber = function (num: string): string {
  for (let i = num.length - 1; i >= 0; i--) {
    const item = num[i];

    if (+item % 2 === 0) {
      num = num.substring(0, i);
    } else {
      break;
    }
  }
  return num;
};

console.log(largestOddNumber('3021456986246') || '""');
