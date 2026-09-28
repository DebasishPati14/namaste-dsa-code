const balancedStringSplit = function (s: string): number {
  let totalBalSubstr = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 'R') {
      count++;
    } else {
      if (count > 0) {
        count--;
        totalBalSubstr = count == 0 ? totalBalSubstr + 1 : totalBalSubstr;
      }
    }
  }

  return totalBalSubstr;
};

const str = 'RLRRRLLRLL';
console.log({ balancedString: balancedStringSplit(str) });
